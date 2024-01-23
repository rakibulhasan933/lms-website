"use client";
import Link from 'next/link'
import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet"
import { usePathname } from 'next/navigation';


function Navbar() {
	const path = usePathname();
	return (
		<div>
			<header className="flex items-center p-2 bg-white justify-between dark:bg-gray-800">
				<div className="flex flex-row items-center gap-4">
					<Sheet>
						<SheetTrigger asChild>
							<Button variant="outline">Open</Button>
						</SheetTrigger>
						<SheetContent>
							<SheetHeader className=' flex flex-row justify-around items-center'>
								<SheetTitle>DashBoard</SheetTitle>
								<SheetClose asChild>
									Close
								</SheetClose>
							</SheetHeader>
							<div className="flex flex-col gap-y-1 pt-4">
								<Link href="/mycourse" className={`px-3 py-2 rounded font-medium text-base ${path === "/mycourse" ? "bg-stone-100 text-blue-700 border-r-4 border-blue-500" : ""}`} > My Classes</Link>
								<Link href="/profile" className={`px-3 py-2 rounded font-medium text-base ${path === "/profile" ? "bg-stone-100 text-blue-700 border-r-4 border-blue-500" : ""}`}>Profile</Link>
							</div>
						</SheetContent>
					</Sheet>
					<Link className="text-2xl font-bold text-gray-900 dark:text-gray-100" href="#">
						LMS
					</Link>
				</div>

				<nav className="flex gap-4">
					<Link className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100" href="#">
						Courses
					</Link>
					<Link className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100" href="#">
						About
					</Link>
					<Link className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100" href="#">
						Contact
					</Link>
					<Link className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100" href="/login">
						Login
					</Link>
				</nav>
			</header>
		</div>
	)
}

export default Navbar