import * as React from 'react';

import PhotoInfo from '../PhotoInfo';

import './SmallPhotoDesktopContainerReverse.scss';

interface Props {
	children: any;
	caption: string;
}

export default (props: Props) => (
	<div className="SmallPhotoDesktopContainerReverse">
		{props.children}
		<PhotoInfo caption={props.caption}/>
	</div>
);