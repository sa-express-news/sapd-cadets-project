import * as React from 'react';

import PhotoInfo         from '../PhotoInfo';
import SlideshowButton     from '../SlideshowButton';
import SlideshowInfo    from '../SlideshowInfo';

import './SlideshowPhoto.scss';

interface Props {
	source: string;
	caption: string;
	moveForward: Function;
	moveBackward: Function;
	handleTouchStart: any;
	handleTouchEnd: any;
	isInfoHidden: boolean;
	slideshowInfoText: string;
}

export default (props: Props) => (
	<div className="SlideshowPhotoContainer">
		<SlideshowInfo text={props.slideshowInfoText} isHidden={props.isInfoHidden} />
		<img 
			className="SlideshowPhoto"
			src={props.source}
			alt={props.caption}
			onTouchStart={props.handleTouchStart}
			onTouchEnd={props.handleTouchEnd}
		/>
		<PhotoInfo caption={props.caption} />
		<SlideshowButton right={false} onClick={props.moveBackward} />
		<SlideshowButton right={true} onClick={props.moveForward} />
	</div>
);