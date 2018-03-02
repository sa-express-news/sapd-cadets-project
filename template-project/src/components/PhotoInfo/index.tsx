import * as React from 'react';

import PhotoCaption from '../PhotoCaption';
import PhotoCutline from '../PhotoCutline';

import './PhotoInfo.scss';

interface Props {
	caption: string;
	cutline: string;
}

export default (props: Props) => (
	<div className="PhotoInfo">
		<PhotoCaption text={`${props.caption} `}/>
		<PhotoCutline text={props.cutline}/>
	</div>
);