"use client";

import Image from "next/image";
import { Star, Code, Github, Twitter, Contact } from "lucide-react";
import posthog from "posthog-js";

export default function Home() {
	const socialLinks = [
		{
			name: "GitHub",
			url: "https://github.com/melodyclue",
			icon: <Github className="h-5 w-5" />,
		},
		{
			name: "Twitter",
			url: "https://twitter.com/literalat",
			icon: <Twitter className="h-5 w-5" />,
		},
	];

	const skills = [
		"Next.jsとtRPCを活用した型安全なフルスタックサービス開発（4年）",
		"WordPressのDBと連携した会員機能やECサイト構築（4年）",
		"レガシー環境からモダンなフレームワークへのリプレイス経験",
		"StripeやSquareを用いた決済システムの構築（2年）",
		"システム全体のアーキテクチャ設計および技術選定",
	];

	const projects = [
		{
			title: "Lyk2",
			description: "クリエイター支援プラットフォーム",
			imageUrl: "/lyk2.png",
			link: "https://lyk2.com",
			status: "OPEN",
		},
		{
			title: "Tuple",
			description: "関連リンクをプロジェクト単位でまとめて、スマートに共有",
			imageUrl: "/tuple-transparent-bg.png",
			link: "https://tuple.at",
			status: "OPEN",
		},
	];

	const techSkills = [
		"Next.js",
		"TypeScript",
		"WordPress",
		"React",
		"Stripe",
		"tRPC",
	];

	return (
		<main className="min-h-screen bg-white">
			<div className="container mx-auto px-4 py-12 max-w-6xl">
				{/* Hero Section */}
				<section className="mb-24">
					<div className="max-w-2xl mx-auto text-center">
						<div className="w-24 h-24 rounded-full overflow-hidden mx-auto my-6">
							<Image
								src="/avatar.png"
								alt="プロフィール画像"
								width={96}
								height={96}
								className="object-cover"
								priority
							/>
						</div>
						<h1 className="text-3xl font-bold mb-4">Reo Yamashita</h1>
						<p className="text-gray-600 text-sm mb-8 max-w-xl mx-auto">
							フルスタックエンジニア
						</p>
						<div className="flex justify-center gap-3">
							{socialLinks.map((link) => (
								<a
									key={link.name}
									href={link.url}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={link.name}
									className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900 transition-all"
									onClick={() => {
										posthog.capture('social_click', {
											platform: link.name,
											location: 'hero_section'
										});
									}}
								>
									{link.icon}
								</a>
							))}
						</div>
					</div>
				</section>

				{/* About Me */}
				<section className="mb-24">
					<div className="max-w-3xl mx-auto px-6 text-center">
						<h2 className="text-xl font-bold mb-6">自己紹介</h2>
						<p className=" text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
							Web制作の現場で経験を積みながら、自社プロダクトの開発にも携わってきました。クライアントワークで得た知見を活かし、見た目にも美しく、使いやすいユーザー体験を大切にしています。新しい技術やフレームワークのキャッチアップにも前向きで、より良いプロダクトを効率よくつくるための工夫を常に考えています。
						</p>
					</div>
				</section>

				{/* Projects Section */}
				<section id="projects" className="mb-24">
					<div className="max-w-4xl mx-auto">
						<h2 className="text-2xl font-bold mb-10 text-center">
							プロジェクト
						</h2>
						<div className="flex flex-col space-y-6">
							{projects.map((project) => (
								<a
									key={project.title}
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									className="group hover:bg-gray-50 rounded-xl p-4 transition-colors"
									onClick={() => {
										posthog.capture('project_click', {
											project: project.title,
											location: 'projects_section'
										});
									}}
								>
									<div className="flex items-center">
										<div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 mr-6">
											<Image
												src={project.imageUrl}
												alt={project.title}
												width={64}
												height={64}
												className="object-cover h-full w-full"
											/>
										</div>
										<div className="flex-1">
											<div className="flex items-center mb-1">
												<h3 className="text-lg font-medium text-gray-900 mr-3">
													{project.title}
												</h3>
											</div>
											<p className="text-sm text-gray-600">
												{project.description}
											</p>
										</div>
									</div>
								</a>
							))}
						</div>
					</div>
				</section>

				{/* Skills */}
				<section className="mb-24">
					<div className="max-w-4xl mx-auto rounded-3xl p-8">
						<div className="flex items-center gap-2 mb-6">
							<Code className="text-gray-400" size={24} />
							<h2 className="text-2xl font-bold">スキルセット</h2>
						</div>
						<ul className="list-disc pl-5 space-y-3 text-gray-700 mb-8">
							{skills.map((skill) => (
								<li key={skill.substring(0, 20)} className="text-base">
									{skill}
								</li>
							))}
						</ul>
						<div className="flex flex-wrap gap-2">
							{techSkills.map((skill) => (
								<span
									key={skill}
									className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
								>
									{skill}
								</span>
							))}
						</div>
					</div>
				</section>

				{/* Contact Section */}
				<section className="mb-12">
					<div className="max-w-4xl mx-auto rounded-3xl p-8">
						<div className="flex items-center justify-center gap-2 mb-12">
							<h2 className="text-2xl font-bold">お問い合わせ</h2>
						</div>
						<div className="flex flex-col md:flex-row items-center justify-center gap-8">
							<div className="text-center">
								<div className="w-28 h-28 overflow-hidden relative rounded-full">
									<Image
										src="/avatar.png"
										alt="Contact"
										width={112}
										height={112}
										className="object-cover"
									/>
								</div>
							</div>
							<div className="flex flex-col gap-4">
								<div className="text-gray-800">
									<p className="mb-2">ご連絡はこちらまで：</p>
									<p>
										<a
											className="underline text-blue-600 hover:text-blue-800 transition-colors"
											href="mailto:melody.router@gmail.com"
										>
											melody.router@gmail.com
										</a>
									</p>
								</div>
								<a
									href="https://twitter.com/literalat"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 px-6 py-3 bg-gray-50 hover:bg-gray-100 transition-colors rounded-xl border border-gray-200"
									onClick={() => {
										posthog.capture('twitter_click', {
											platform: 'X (Twitter)',
											location: 'contact_section'
										});
									}}
								>
									<Twitter className="h-5 w-5 text-gray-600" />
									<span className="font-medium">X (Twitter)</span>
								</a>
							</div>
						</div>
					</div>
				</section>

				{/* Footer */}
				<footer className="text-center text-gray-500 text-sm pt-6 pb-2">
					<p>
						© {new Date().getFullYear()} Reo Yamashita. All rights reserved.
					</p>
				</footer>
			</div>
		</main>
	);
}
