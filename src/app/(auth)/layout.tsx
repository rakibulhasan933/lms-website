import Footer from "@/components/Footer";

export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<section>
			{children}
		</section>
	);
}