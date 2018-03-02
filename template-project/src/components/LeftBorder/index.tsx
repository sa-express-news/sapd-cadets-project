import * as React from 'react';

import './LeftBorder.scss';

interface Props {
	children: any;
}

export default ({ children }: Props) => (
	<div className="LeftBorder">
		{children}
	</div>
);