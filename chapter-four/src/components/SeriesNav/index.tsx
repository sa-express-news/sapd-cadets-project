import * as React from 'react';

import './SeriesNav.scss';

// interfaces
import { Chapter } from '../../utils/interfaces';

interface Props {
	chatter: string;
	chapters: Array<Chapter>;
	current: string;
	show: boolean;
}

const isCurrent = (chapter: string, current: string) => chapter === current.slice(0, current.indexOf(':'));

const getClasses = (classes: Array<string>, toAdd: Array<string>, conditional: boolean) => {
	if (conditional) {
		classes = classes.concat(toAdd);
	}
	return classes.join(' ');
};

export default (props: Props) => (
	<div className={getClasses(['SeriesNav'], ['show'], props.show)}>
		<h3 className="chatter">{props.chatter}</h3>
		<div className="nav-wrapper">
			{props.chapters.map((curr: Chapter, key: number) => (
				<div key={key} className={getClasses(['chapter'], ['current'], isCurrent(curr.chapter, props.current))}>
					{isCurrent(curr.chapter, props.current) && (
						<div>
							<h4>{curr.chapter}</h4>
							<p>{curr.desc}</p>
							<p className="current">Now reading</p>
						</div>
					)}
					{!isCurrent(curr.chapter, props.current) && (
						<a href={curr.link}>
							<div>
								<h4>{curr.chapter}</h4>
								<p>{curr.desc}</p>
							</div>
						</a>
					)}
					<hr />
				</div>
			))}
		</div>
	</div>
);