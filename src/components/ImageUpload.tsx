 "use client";
import { uploadImage } from '@/lib/uploadImage';
import Image from 'next/image';
import React from 'react';
import { useFormStatus } from 'react-dom';
import { useFormState } from 'react-dom';

const initialState = {
	imageUrl: "",
	message: "",
	error: false
};

function ImageUpload() {
	const [state, formAction] = useFormState(uploadImage, initialState);
	const { pending } = useFormStatus();
	console.log({ state }, pending);
	return (
		<div className='flex flex-col items-center space-y-2'>
			{state.imageUrl.length > 10 ? <Image src={state.imageUrl} alt='profile photo' className=' object-contain rounded-full' width={50} height={50} /> :
				<>

					<form action={formAction} className='flex flex-row gap-1'>
						<input type="file" name="image" id="image" accept='image/*' />
						<input disabled={pending} type="submit" value="Upload" />
					</form>

				</>
			}
		</div>
	)
}

export default ImageUpload