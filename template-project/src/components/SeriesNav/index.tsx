import * as React from 'react';

import './SeriesNav.scss';

interface Chapter {
	chapter: string;
	desc: string;
}

interface Props {
	chatter: string;
	chapters: Array<Chapter>;
	current: string;
}

const isCurrent = (chapter: string, current: string) => chapter === current;

const getClasses = (chapter: string, current: string) => {
	const classes = ['chapter'];
	if (isCurrent(chapter, current)) {
		classes.push('current');
	}
	return classes.join(' ');
};

export default (props: Props) => (
	<div className="SeriesNav">
		<h3 className="chatter">{props.chatter}</h3>
		<div className="nav-wrapper">
			{props.chapters.map((curr: Chapter) => (
				<div className={getClasses(curr.chapter, props.current)}>
					<h4>{curr.chapter}</h4>
					<p>{curr.desc}</p>
					{isCurrent(curr.chapter, props.current) && (
						<p className="current">Now reading</p>
					)}
					<hr />
				</div>
			))}
		</div>
	</div>
);