import * as React from 'react';

import PhotoCaption from '../PhotoCaption';

import './PhotoInfo.scss';

interface Props {
	caption: string;
}

export default ({ caption }: Props) => (
	<div className="PhotoInfo">
		<PhotoCaption text={`${caption} `}/>
	</div>
);