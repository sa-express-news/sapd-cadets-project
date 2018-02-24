import * as React from 'react';

const icon = require('../Icons/twitter_logo.svg');

interface Props {}

export default (props: Props) => (
	<div className="TwitterLogo">
		<img src={icon} alt="Twitter"/>
	</div>
);