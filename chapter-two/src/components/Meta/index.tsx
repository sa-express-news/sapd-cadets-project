import * as React from 'react';

import './Meta.scss';

interface Props {
	headline: string;
	subhead: string;
	chapter: string;
	byline: string;
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
		byline,
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
			<h4>By {byline}</h4>
			<h4>Published {date}</h4>
			<div className="spacer" />
		</div>
	);
};