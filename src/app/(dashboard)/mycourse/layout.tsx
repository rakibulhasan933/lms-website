


export default function DashboardLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode
}) {
	return (
		<section>
			<div>Sidebar</div>
			{children}
		</section>
	)
}