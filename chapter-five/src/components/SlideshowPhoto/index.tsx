import * as React from 'react';

import PhotoInfo from '../PhotoInfo';
import SlideshowButton from '../SlideshowButton';

import './SlideshowPhoto.scss';

interface Props {
	source: string;
	caption: string;
	cutline: string;
	moveForward: Function;
	moveBackward: Function;
	handleTouchStart: any;
	handleTouchEnd: any;
}

export default (props: Props) => (
	<div className="SlideshowPhotoContainer">
		<img 
			className="SlideshowPhoto"
			src={props.source}
			alt={props.caption}
			onTouchStart={props.handleTouchStart}
			onTouchEnd={props.handleTouchEnd}
		/>
		<PhotoInfo caption={props.caption} cutline={props.cutline}/>
		<SlideshowButton right={false} onClick={props.moveBackward}/>
		<SlideshowButton right={true} onClick={props.moveForward}/>
	</div>
);