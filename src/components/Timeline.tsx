import React from "react";

type TimelineEvent = {
	warekiYear: string;
	year: string;
	description: string;
};

type TimelineProps = {
	events: TimelineEvent[];
};

export default function Timeline({ events }: TimelineProps) {
	return (
		<div className="w-full max-w-xl mx-auto">
			<h2 className="text-xl font-bold mb-4 text-center">履歴</h2>
			<div className="relative border-l-2 border-white/20 pl-8 space-y-8 ml-4">
				{events.map((event, index) => (
					<div key={`${event.year}-${index}`} className="relative">
						<div className="absolute -left-[41px] w-5 h-5 rounded-full bg-white/20"></div>
						<div className="mb-1 flex items-end gap-2">
							<span className="text-sm text-white/60">{event.warekiYear}</span>
							<span className="text-base font-semibold">{event.year}</span>
						</div>
						<p className="text-md">{event.description}</p>
					</div>
				))}
			</div>
		</div>
	);
}
