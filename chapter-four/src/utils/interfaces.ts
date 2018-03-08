export interface AppPosition {
	pageOffsetX: number;
	pageOffsetY: number;
	pageHeight: number;
	pageWidth: number;
}

export interface ComponentPosition {
	offsetLeft: number;
	offsetTop: number;
	offsetWidth: number;
	offsetHeight: number;
}

export type MediaElement = HTMLAudioElement | HTMLVideoElement;

export interface Chapter {
	chapter: string;
	desc: string;
	link: string;
}

export interface SeriesNavs {
	chatter: string;
	chapters: Array<Chapter>;
	current: string;
	show: boolean;
}

export interface Bio {
	name: string;
	data: string;
	key: string;
}
