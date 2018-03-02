import * as React from 'react';

import './Hero.scss';

interface Props {
	source: string;
	caption: string;
	cutline: string;
	readonly children?: ReadonlyArray<JSX.Element>;
}

const getStyles = (source: string) => ({
	backgroundImage: `url('${source}')`,
});

export default (props: Props) => (
	<div className="Hero" style={getStyles(props.source)}>
		{props.children}
	</div>
);