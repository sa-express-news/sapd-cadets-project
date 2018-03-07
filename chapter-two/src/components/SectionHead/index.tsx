import * as React from 'react';

import './SectionHead.scss';

interface Props {
	src: string;
}

export default ({ src }: Props) => (
	<div className="SectionHead">
		<hr />
		<img src={src} />
	</div>
);
