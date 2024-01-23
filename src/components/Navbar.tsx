import Link from 'next/link'
import React from 'react'

function Navbar() {
	return (
		<div>
			<header className="flex items-center justify-between p-6 bg-white dark:bg-gray-800">
				<Link className="text-2xl font-bold text-gray-900 dark:text-gray-100" href="#">
					LMS
				</Link>
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