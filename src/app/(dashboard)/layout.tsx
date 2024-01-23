import Navbar from "@/components/Navbar"



export default function DashboardLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode
}) {
	return (
		<section className="h-full md:mx-6 mx-2">
			<Navbar />
			{children}
		</section>
	)
}