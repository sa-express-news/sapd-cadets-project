import * as React from 'react';

import ENLogo from '../ENLogo';

import './NavBar.scss';

interface Props {
	url: string;
}

export default ({ url }: Props) => (
	<div className="NavBar">
		<div className="left">
			<ENLogo />
		</div>
	</div>
);
