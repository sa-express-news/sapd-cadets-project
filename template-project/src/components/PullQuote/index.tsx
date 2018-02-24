import * as React from 'react';

import LeftYellowBorder from '../LeftYellowBorder';

import './PullQuote.scss';

interface Props {
	quote: string;
	source: string;
}

export default ({quote, source}: Props) => (
	<div className="PullQuoteContainer">
		<LeftYellowBorder>
			<p className="PullQuote">"{quote}"</p>
			<p className="PullQuoteAttribution"> - {source}</p>
		</LeftYellowBorder>
	</div>
);