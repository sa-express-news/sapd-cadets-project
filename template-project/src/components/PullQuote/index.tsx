import * as React from 'react';

import LeftBorder from '../LeftBorder';

import './PullQuote.scss';

interface Props {
	quote: string;
	source: string;
}

export default ({quote, source}: Props) => (
	<div className="PullQuoteContainer">
		<LeftBorder>
			<p className="PullQuote">"{quote}"</p>
			<p className="PullQuoteAttribution"> - {source}</p>
		</LeftBorder>
	</div>
);