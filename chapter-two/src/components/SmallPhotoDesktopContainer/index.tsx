import * as React from 'react';

import PhotoInfo from '../PhotoInfo';

import './SmallPhotoDesktopContainer.scss';

interface Props {
	children: any;
	caption: string;
	cutline: string;
}

export default (props: Props) => (
	<div className="SmallPhotoDesktopContainer">
		{props.children}
		<PhotoInfo caption={props.caption} cutline={props.cutline}/>
	</div>
);