import * as React 	from 'react';
import * as _		from 'lodash';

// interfaces
import { AppPosition, ComponentPosition } from '../App';

interface State {
	isVisible: boolean;
	audio: HTMLAudioElement;
	instance: HTMLDivElement;
	componentPosition: ComponentPosition;
}

interface Props {
	file: string;
	appPosition: AppPosition;
	getComponentVisiblity: Function;
	fraction: number;
}

const defaultComponentPosition: ComponentPosition = {
	offsetLeft: 0,
	offsetTop: 0,
	offsetWidth: 0,
	offsetHeight: 0,
};

let _audioEl: HTMLAudioElement;
let _instance: HTMLDivElement;

class BackgroundAudio extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			isVisible: false,
			audio: _audioEl,
			instance: _instance,
			componentPosition: defaultComponentPosition,
		};
	}

	componentDidMount() {
		this.setAudioElement();
		this.getComponentPosition();
	}

	componentDidUpdate(nextProps: Props, nextState: State) {
		const { componentPosition, audio, instance } = this.state;
		const { appPosition } 		= this.props;
		if (!_.isEqual(nextState.componentPosition, componentPosition) || !_.isEqual(nextProps.appPosition, appPosition)) {
			if (audio && instance) {
				this.playIfVisible();
			}
		}
	}

	playIfVisible() {
		const { fraction,  getComponentVisiblity, appPosition } = this.props;
		const { isVisible, componentPosition }					= this.state;
		
		const amountVisible = getComponentVisiblity(appPosition, componentPosition);

		if (!isVisible && amountVisible > fraction) {
			this.play();
		} else if (amountVisible === 0) {
			this.stop();
		}
	}

	play() {
		this.state.audio.play();
		this.setState({ isVisible: true });
	}

	stop() {
		this.state.audio.pause();
		this.state.audio.currentTime = 0;
		this.setState({ isVisible: false });
	}

	setAudioElement() {
		const { audio } = this.state;
		if (_audioEl && !audio) {
			this.setState({ audio: _audioEl });
		}
	}

	getComponentPosition() {
		let { instance } = this.state;
		if (_instance && !instance) {
			instance = _instance;
		}
		const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = instance;
		const componentPosition = { offsetLeft, offsetTop, offsetWidth, offsetHeight };
		this.setState({ instance, componentPosition });
	}

	render() {
		const { file } = this.props;
		return (
			<div className="BackgroundAudio" ref={(el: HTMLDivElement) => _instance = el}>
				<audio src={file} ref={(el: HTMLAudioElement) => _audioEl = el} loop={true}>
					Your browser does not support the <code>audio</code> element.
				</audio>
				{this.props.children}
			</div>
		);
	}
}

export default BackgroundAudio;