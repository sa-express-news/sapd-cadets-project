import * as React from 'react';

import './NavBar.scss';

interface Props {
	readonly children?: ReadonlyArray<JSX.Element>;
}

export default ({ children }: Props) => (
	<div className="NavBar">
		{children}
	</div>
);
