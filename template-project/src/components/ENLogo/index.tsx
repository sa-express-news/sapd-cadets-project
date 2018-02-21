import * as React from 'react';

import './ENLogo.scss';

const icon = require('./en-logo.svg');

export default () => (
	<div className="ENLogo">
		<a href="https://www.expressnews.com/" target="_blank">
			<img src={icon} alt="Express News"/>
		</a>
	</div>
);