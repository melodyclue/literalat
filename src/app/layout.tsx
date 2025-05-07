import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
	variable: "--font-sans",
	subsets: ["latin"],
	weight: ["400", "500", "700"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Reoのポートフォリオ",
	description: "フルスタックエンジニア Reo のポートフォリオです。",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body className={`${notoSansJP.variable} font-sans antialiased`}>
				<main>{children}</main>
			</body>
		</html>
	);
}
