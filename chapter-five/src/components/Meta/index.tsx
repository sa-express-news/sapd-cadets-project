import * as React from 'react';

import './Meta.scss';

interface Props {
	headline: string;
	subhead: string;
	chapter: string;
	author: string;
	photos: string;
	presentation: string;
	date: string;
	series: string;
	url: string;
	show: boolean;
}

const getClasses = (show: boolean) => show ? 'Meta show' : 'Meta';

export default (props: Props) => {
	const {
		headline,
		series,
		chapter,
		subhead,
		author,
		photos,
		presentation,
		date,
		show
	} = props;

	return (
		<div className={getClasses(show)}>
			<h1>{headline}</h1>
			<h2>{series}</h2>
			<hr className="top" />
			<h3 className="chapter">{chapter}</h3>
			<hr className="bottom" />
			<h3 className="subhead">{subhead}</h3>
			<h4>Stories: {author}</h4>
			<h4>Photos & videos: {photos}</h4>
			<h4>Presentation: {presentation}</h4>
			<br />
			<h4>Published {date}</h4>
			<h4>Presentation includes sound. Click icon to mute.</h4>
			<div className="spacer" />
		</div>
	);
};