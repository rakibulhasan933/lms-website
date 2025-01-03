 "use server";
import { revalidatePath } from "next/cache";
import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3"; "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"

// S3 Client connected;
const s3Client = new S3Client({
	region: process.env.NEXT_AWS_S3_REGION,
	credentials: {
		accessKeyId: process.env.NEXT_AWS_S3_ACCESS_KEY_ID,
		secretAccessKey: process.env.NEXT_AWS_S3_SECRET_ACCESS_KEY,
	}
});

// Read Image AWS S3
export async function imageRead(fileName: string) {
	const params = {
		Bucket: process.env.NEXT_AWS_S3_BUCKET_NAME,
		Key: fileName,

	};
	try {
		const command = new GetObjectCommand(params);
		const url = await getSignedUrl(s3Client, command);
		return url
	} catch (error) {
		throw new Error("file upload failed");
	}
}

// Upload Image S3
export async function uploadImage(prevState: { message: string, error: boolean, imageUrl: string }, formData: any,) {
	const file = formData.get("image");
	console.log({ file });
	const buffer = Buffer.from(await file.arrayBuffer());
	const fileName = `Image/${Date.now().toString()}.jpg`;

	const params = {
		Bucket: process.env.NEXT_AWS_S3_BUCKET_NAME,
		Key: `${fileName}`,
		Body: buffer,
		ContentType: "*/*"
	};


	try {
		const command = new PutObjectCommand(params);
		const response = await s3Client.send(command);
		const imageUrl = await imageRead(fileName);
		// console.log({ response });
		// const url = await s3videoRead(fileName);
		// console.log("File uploaded successfully:", url);
		revalidatePath("/");
		return { message: "Image upload  successfully", error: false, imageUrl };
	} catch (e) {
		return { message: "video file upload failed", error: true, imageUrl: "" };
	}
}