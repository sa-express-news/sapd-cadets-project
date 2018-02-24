import * as React from 'react';

import './LeftYellowBorder.scss';

interface Props {
	children: any;
}

export default ({ children }: Props) => (
	<div className="LeftYellowBorder">
		{children}
	</div>
);