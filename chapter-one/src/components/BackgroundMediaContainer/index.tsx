import * as React 		from 'react';
import * as ReactDOM 	from 'react-dom';
import * as _			from 'lodash';

import { getComponentVisiblity } from '../../utils';

// interfaces
import { AppPosition, ComponentPosition, MediaElement } from '../../utils/interfaces';

interface State {
	isPlaying: boolean;
	isPaused: boolean;
	media: any;
	instance: any;
	componentPosition: ComponentPosition;
}

interface Props {
	appPosition: AppPosition;
	startFraction: number;
	endFraction: number;
	src: string;
	muted?: boolean;
	controls?: boolean;
}

const defaultComponentPosition: ComponentPosition = {
	offsetLeft: 0,
	offsetTop: 0,
	offsetWidth: 0,
	offsetHeight: 0,
};

let _instance: any = null;

class BackgroundMediaContainer extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			isPlaying: false,
			isPaused: true,
			media: null,
			instance: null,
			componentPosition: defaultComponentPosition,
		};
		_instance = null;
	}

	componentDidMount() {
		if (this.props.src) {
			this.setMediaElement();
			this.setComponentPosition();
		}
	}

	componentDidUpdate(nextProps: Props, nextState: State) {
		if ((nextProps.src && !this.isMobile()) || nextState.isPlaying) {
			const { componentPosition, media, instance } 	= this.state;
			const { appPosition } 							= this.props;
			if (!_.isEqual(nextState.componentPosition, componentPosition) || !_.isEqual(nextProps.appPosition, appPosition)) {
				if (media && instance) {
					this.playIfVisible();
				}
			}
			this.updateComponentPosition(nextState.componentPosition);
		}
	}

	isMobile() {
		return window.innerWidth < 768;
	}

	playIfVisible() {
		const { startFraction, endFraction, appPosition } 		= this.props;
		const { isPlaying, isPaused, componentPosition, media }	= this.state;
		
		const amountVisible = getComponentVisiblity(appPosition, componentPosition);

		if (!isPlaying && media.paused && amountVisible > startFraction) {
			media.play();
		} else if (!isPaused && !media.paused && amountVisible <= endFraction) {
			media.pause();
			media.currentTime = 0;
		}
	}

	// There's some tricky state management going on in onPlaying and onPaused that has to 
	// do with an error that can occur when the user starts and stops the media too fast
	// more here: https://stackoverflow.com/questions/36803176/how-to-prevent-the-play-request-was-interrupted-by-a-call-to-pause-error

	onPlaying() {
		const { isPlaying, isPaused } = this.state;
		if (!isPlaying || isPaused) {
			this.setState({
				isPlaying: true,
				isPaused: false,
			});
		}
	}

	onPaused() {
		const { isPlaying, isPaused } = this.state;
		if (isPlaying || !isPaused) {
			this.setState({
				isPlaying: false,
				isPaused: true,
			});
		}
	}

	bindMediaEvents(media: MediaElement) {
		media.onplaying = this.onPlaying.bind(this);
		media.onpause 	= this.onPaused.bind(this);
	}

	setMediaElement() {
		let { media } = this.state;
		if (!media) {
			media = ReactDOM.findDOMNode(this.refs.media);
			if (!this.isMobile()) { // don't autoplay things on mobile
				this.bindMediaEvents(media);
			} 
			this.setState({ media });
		}
	}

	getComponentPosition(instance: any) {
		const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = instance;
		return { offsetLeft, offsetTop, offsetWidth, offsetHeight };
	}

	setComponentPosition() {
		let { instance } = this.state;
		if (_instance && !instance) {
			instance = _instance;
		}
		const componentPosition = this.getComponentPosition(instance);
		this.setState({ instance, componentPosition });
	}

	updateComponentPosition(componentPosition: ComponentPosition) {
		const { instance } = this.state;
		const currComponentPosition = this.getComponentPosition(instance);
		if (!_.isEqual(componentPosition, currComponentPosition)) {
			// This should only occure once or twice, if at all, as all assets are still loading and pieces are shifting.
			this.setState({ componentPosition: currComponentPosition });
		}
	}

	render() {
		return (
			<div className="BackgroundMediaContainer" ref={(el: any) => _instance = el}>
				{React.Children.map(this.props.children, (element: any, idx: number) => {
					if (element !== null && (element.type === 'audio' || element.type === 'video')) { // identify and tag the media element
						return React.cloneElement(element, { ref: 'media' });
					} else {
						return element;
					}
				})}
			</div>
		);
	}
}

export default BackgroundMediaContainer;