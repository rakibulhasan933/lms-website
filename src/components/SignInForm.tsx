"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { useFormState, useFormStatus } from "react-dom"
import { uploadImage } from "@/lib/uploadImage"



const formSchema = z.object({
	email: z.string().min(2, {
		message: "email required.",
	}),
	password: z.string().min(6, {
		message: "Password must be at least 6 characters.",
	}),
});

export function SignInForm() {
	const router = useRouter();

	// Create User
	// const { mutate, isPending } = useMutation({
	// 	mutationFn: async ({ phone, username, password, photoUrl }: UserProps) => {
	// 		const response = await axios.post("/api/register", {
	// 			phone, username, password, photoUrl
	// 		});
	// 		return response.data;
	// 	},
	// });


	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	});
	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
		const email = values.email;
		const password = values.password;
		// mutate({ phone, password, username, photoUrl }, {
		// 	onSuccess: (data) => {
		// 		// console.log(data);
		// 		if (data?.data?.id) {
		// 			toast.success("Successfully account  created");
		// 			router.push(`/login`)
		// 		} else {
		// 			toast.error("User Created Failed");
		// 		}
		// 	},
		// 	onError: (error) => {
		// 		toast.error("User Created Failed");
		// 	}
		// });
	}

	return (
		<>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input placeholder="email" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<Input placeholder="password" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit" variant={"login"} className="mt-2">Submit</Button>
				</form>
			</Form>
		</>
	)
}