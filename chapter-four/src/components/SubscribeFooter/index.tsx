import * as React from 'react';

import Button from '../Button';

import './SubscribeFooter.scss';

interface Props {
	link: string;
}

export default ({ link }: Props) => (
	<div className="SubscribeFooter">
		<div>
			<h4>Real Journalism | Real Insight</h4>
			<p>The Express-News brings you authoritative local stories. Subscribe today.</p>
			<Button link={link} text="Subscribe"/>
		</div>
	</div>
);