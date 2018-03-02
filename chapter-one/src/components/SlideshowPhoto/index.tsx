import * as React from 'react';

import PhotoInfo 		from '../PhotoInfo';
import SlideshowButton 	from '../SlideshowButton';
import SlideshowInfo	from '../SlideshowInfo';

import './SlideshowPhoto.scss';

interface Props {
	source: string;
	caption: string;
	moveForward: Function;
	moveBackward: Function;
	handleTouchStart: any;
	handleTouchEnd: any;
	isInfoHidden: boolean;
}

interface State {
	photoInfoHeight: number;
}

class SlideshowPhoto extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			photoInfoHeight: 0,
		};
		this.setPhotoInfoHeight = this.setPhotoInfoHeight.bind(this);
	}

	setPhotoInfoHeight(photoInfoHeight: number) {
		this.setState({ photoInfoHeight });
	}

	render() {
		const {
			source,
			caption,
			handleTouchStart,
			handleTouchEnd,
			moveBackward,
			moveForward,
			isInfoHidden
		} 							= this.props;
		const { photoInfoHeight } 	= this.state;
		return (
			<div className="SlideshowPhotoContainer">
				<img 
					className="SlideshowPhoto"
					src={source}
					alt={caption}
					onTouchStart={handleTouchStart}
					onTouchEnd={handleTouchEnd}
				/>
				<PhotoInfo caption={caption} setHeight={this.setPhotoInfoHeight} />
				<SlideshowButton right={false} onClick={moveBackward} />
				<SlideshowButton right={true} onClick={moveForward} />
				<SlideshowInfo text="Click arrows to see slideshow" photoInfoHeight={photoInfoHeight} isHidden={isInfoHidden} />
			</div>
		);
	}
}

export default SlideshowPhoto;