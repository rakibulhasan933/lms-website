  import Link from 'next/link'
import React from 'react'
import { Input } from './ui/input';
import { Button } from './ui/button';

function Footer() {
	return (
		<footer className="flex items-center justify-between px-6 bg-gray-100 dark:bg-gray-800">
			<div className="flex items-center gap-4">
				<Link className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100" href="#">
					<TwitterIcon className="h-6 w-6" />
				</Link>
				<Link className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100" href="#">
					<FacebookIcon className="h-6 w-6" />
				</Link>
				<Link className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100" href="#">
					<InstagramIcon className="h-6 w-6" />
				</Link>
			</div>
			<form className="flex items-center gap-2">
				<Input className="w-48" placeholder="Enter your email" type="email" />
				<Button>Subscribe</Button>
			</form>
		</footer>
	)
}

export default Footer;

function FacebookIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
		</svg>
	)
}


function InstagramIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
			<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
			<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
		</svg>
	)
}


function TwitterIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
		</svg>
	)
}