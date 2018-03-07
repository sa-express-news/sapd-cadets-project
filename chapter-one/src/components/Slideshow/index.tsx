import * as React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import SlideshowPhoto from '../SlideshowPhoto';

import './Slideshow.scss';

interface Photo {
	source: string;
	caption: string;
}

interface Props {
	photos: Array<Photo>;
}

interface State {
	activeIndex: number;
	loadedPhotos: Array<Photo>;
	touchStartX: number;
	touchStartY: number;
	lastChange: Date;
	isInfoHidden: boolean;
}

class Slideshow extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			activeIndex : 0,
			loadedPhotos: [],
			touchStartX: 0,
			touchStartY: 0,
			lastChange: new Date(),
			isInfoHidden: false,
		};
		this.moveForward 		= this.moveForward.bind(this);
		this.moveBackward 		= this.moveBackward.bind(this);
	}

	moveForward() {
		let maxIndex = this.props.photos.length - 1;
		let currentIndex = this.state.activeIndex;

		let newIndex = currentIndex === maxIndex ? 0 : currentIndex + 1;

		this.setState(prevState => ({
			activeIndex: newIndex,
			lastChange: new Date(),
			isInfoHidden: true,
		}));
	}

	moveBackward() {
		let currentIndex = this.state.activeIndex;

		let newIndex = currentIndex === 0 ? this.props.photos.length - 1 : currentIndex - 1;

		this.setState(prevState => ({
			activeIndex: newIndex,
			lastChange: new Date(),
			isInfoHidden: true,
		}));
	}

	handleTouchStart(event: TouchEvent) {
		const theTouch = event.touches[0];

		this.setState(prevState => ({
			touchStartX: theTouch.screenX,
			touchStartY: theTouch.screenY
		}));
	}

	handleTouchEnd(event: TouchEvent) {
		const theTouch = event.changedTouches[0];

		if (this.state.touchStartX === null || this.state.touchStartY === null) {
			return;
		}

		if (this.state.touchStartX - theTouch.screenX >= 75) {
			this.moveBackward();
		}

		if (theTouch.screenX - this.state.touchStartX >= 75) {
			this.moveForward();
		}
	}

	shouldComponentUpdate(nextProps: Props, nextState: State) {
		const millisecondsSinceLastChange = new Date().getTime() - this.state.lastChange.getTime();

		if (millisecondsSinceLastChange < 400) {
			return false;
		}

		return true;
	}

	render() {
		const { isInfoHidden } = this.state;
		const slideshowPhotos = this.props.photos.map((photo: Photo, index: number) => {
			return (
				<SlideshowPhoto 
					source={photo.source} 
					caption={photo.caption}
					moveForward={this.moveForward}
					moveBackward={this.moveBackward} 
					handleTouchStart={this.handleTouchStart}
					handleTouchEnd={this.handleTouchEnd}
					isInfoHidden={isInfoHidden}
					slideshowInfoText="CLICK ARROWS TO SEE SLIDESHOW"
					key={index}
				/>
			);
		});

		return (
			<div className="Slideshow">
				<CSSTransitionGroup
					transitionName="slideshow"
					transitionEnterTimeout={350}
					transitionLeave={false}
				>
					{slideshowPhotos[this.state.activeIndex]}
				</CSSTransitionGroup>
				<div className="Slideshow-load">
					{this.props.photos.map((photo: Photo, index: number) => {
						return <img src={photo.source} key={index} alt={photo.caption}/>;
					})}
				</div>
			</div>
		);
	}
}

export default Slideshow;