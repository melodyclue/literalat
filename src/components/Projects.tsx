import React from "react";
import Image from "next/image";

type Project = {
	title: string;
	description: string;
	imageUrl?: string;
	link?: string;
	tags?: string[];
};

type ProjectsProps = {
	projects: Project[];
};

export default function Projects({ projects }: ProjectsProps) {
	return (
		<div className="w-full max-w-4xl mx-auto">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
				{projects.map((project) => (
					<div
						key={project.title}
						className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col h-full"
					>
						{project.imageUrl && (
							<div className="relative w-full h-52 overflow-hidden group">
								<Image
									src={project.imageUrl}
									alt={project.title}
									fill
									className="object-cover transition-transform duration-500 group-hover:scale-105"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
							</div>
						)}
						<div className="p-6 flex flex-col flex-grow">
							<h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
								{project.title}
							</h3>
							<p className="text-base text-gray-600 dark:text-gray-300 mb-4 flex-grow">
								{project.description}
							</p>

							{project.tags && project.tags.length > 0 && (
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tags.map((tag) => (
										<span
											key={`${project.title}-${tag}`}
											className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300"
										>
											{tag}
										</span>
									))}
								</div>
							)}

							{project.link && (
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center justify-center px-4 py-2 bg-accent-color text-white font-medium rounded-md hover:bg-opacity-90 transition-colors duration-200 mt-2 text-sm"
								>
									プロジェクトを見る
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-4 w-4 ml-1"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
										/>
									</svg>
								</a>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
