import * as React from 'react';

const icon = require('../Icons/reddit_logo.svg');

interface Props {}

export default (props: Props) => (
	<div className="RedditLogo">
		<img src={icon} alt="Reddit"/>
	</div>
);