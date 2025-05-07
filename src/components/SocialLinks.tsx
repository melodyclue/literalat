import React from "react";
import { Github, Twitter } from "lucide-react";

type SocialLink = {
	name: string;
	url: string;
	iconPath?: string;
};

type SocialLinksProps = {
	links: SocialLink[];
};

export default function SocialLinks({ links }: SocialLinksProps) {
	// アイコンコンポーネントをマッピング
	const getIconComponent = (name: string) => {
		switch (name.toLowerCase()) {
			case "github":
				return <Github className="w-6 h-6 text-gray-900 dark:text-white" />;
			case "twitter":
				return <Twitter className="w-6 h-6 text-gray-900 dark:text-white" />;
			default:
				return null;
		}
	};

	return (
		<div className="w-full max-w-md mx-auto">
			<div className="flex justify-center gap-4">
				{links.map((link) => (
					<a
						key={link.name}
						href={link.url}
						target="_blank"
						rel="noopener noreferrer"
						className="group flex items-center justify-center p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-accent-color dark:hover:border-accent-color"
						aria-label={link.name}
					>
						<div className="group-hover:scale-110 transition-transform duration-300">
							{getIconComponent(link.name)}
						</div>
						<span className="sr-only">{link.name}</span>
					</a>
				))}
			</div>
		</div>
	);
}
