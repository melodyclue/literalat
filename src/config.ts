export const config = {
	siteName: "Reo's Portfolio",
	siteDescription: "This is Reo's Portfolio",
	siteUrl: "https://literalat.me",
	title: "フルスタックエンジニア",
	description: "",
	keywords: ["portfolia"],
	author: "Reo",
	ogImage: "https://literalat.me/og-image.png",
	ogType: "website",
	ogSiteName: "Reo's Portfolio",
	ogUrl: "https://literalat.me",
	ogLocale: "ja",
	sns: {
		twitter: "https://twitter.com/literalat",
		github: "https://github.com/melodyclue",
		instagram: "https://www.instagram.com/melodyclue_router",
	},
	contact: {
		primary: {
			email: "contact@example.com",
			label: "お問い合わせはこちら",
		},
		socials: [
			{ type: "mail", value: "contact@example.com", label: "Email" },
			{ type: "phone", value: "+81 90-1234-5678", label: "電話" },
			{ type: "line", value: "@melodyclue", label: "LINE" },
		],
	},
	theme: {
		primaryColor: "#171717",
		secondaryColor: "#f3f4f6",
		accentColor: "#6c6c6c",
		backgroundColor: "#ffffff",
		textColor: "#171717",
		borderColor: "#e5e7eb",
	},
	locale: {
		default: "ja",
		supported: ["ja", "en"],
	},
	navigation: {
		main: [
			{ name: "ホーム", path: "/" },
			{ name: "プロジェクト", path: "/#projects" },
			{ name: "スキル", path: "/#skills" },
			{ name: "お問い合わせ", path: "/#contact" },
		],
	},
	legal: {
		copyright: `© ${new Date().getFullYear()} Reo Yamashita`,
		privacyPolicy: "/privacy",
		termsOfService: "/terms",
	},
};
