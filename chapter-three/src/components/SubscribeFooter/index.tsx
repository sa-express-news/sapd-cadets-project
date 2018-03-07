import * as React from 'react';

import Button 		from '../Button';
import SeriesNav 	from '../SeriesNav';

import './SubscribeFooter.scss';

// interfaces
import { SeriesNavs } from '../../utils/interfaces';

interface Props {
	link: string;
	seriesNav: SeriesNavs;
	chapter: string;
}

export default ({ link, seriesNav, chapter }: Props) => (
	<div className="SubscribeFooter">
		<SeriesNav {...seriesNav} current={chapter} show={true} />
		<div>
			<h4>Real Journalism | Real Insight</h4>
			<p>The Express-News brings you authoritative local stories. Subscribe today.</p>
			<Button link={link} text="Subscribe"/>
		</div>
	</div>
);