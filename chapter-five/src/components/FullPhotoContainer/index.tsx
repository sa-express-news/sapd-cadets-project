import * as React from 'react';

import PhotoInfo from '../PhotoInfo';

import './FullPhotoContainer.scss';

interface Props {
	caption: string;
	cutline: string;
	children: any;
}

export default (props: Props) => (
	<div className="FullPhotoContainer">
		{props.children}
		<PhotoInfo caption={props.caption} cutline={props.cutline}/>
	</div>
);