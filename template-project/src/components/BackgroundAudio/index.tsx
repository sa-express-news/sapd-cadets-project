import * as React 	from 'react';
import * as _		from 'lodash';

import { getComponentVisiblity } from '../../utils';

// interfaces
import { AppPosition, ComponentPosition } from '../../utils/interfaces';

interface State {
	isVisible: boolean;
	audio: HTMLAudioElement;
	instance: HTMLDivElement;
	componentPosition: ComponentPosition;
}

interface Props {
	file: string;
	appPosition: AppPosition;
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
		if (this.props.file) {
			this.setAudioElement();
			this.setComponentPosition();
		}
	}

	componentDidUpdate(nextProps: Props, nextState: State) {
		if (nextProps.file) {
			const { componentPosition, audio, instance } 	= this.state;
			const { appPosition } 							= this.props;
			if (!_.isEqual(nextState.componentPosition, componentPosition) || !_.isEqual(nextProps.appPosition, appPosition)) {
				if (audio && instance) {
					this.playIfVisible();
				}
			}
			this.updateComponentPosition(nextState.componentPosition);
		}
	}

	playIfVisible() {
		const { fraction, appPosition } 		= this.props;
		const { isVisible, componentPosition }	= this.state;
		
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

	getComponentPosition(instance: HTMLDivElement) {
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
		const { file } = this.props;
		return (
			<div className="BackgroundAudio" ref={(el: HTMLDivElement) => _instance = el}>
				{file && (
					<audio src={file} ref={(el: HTMLAudioElement) => _audioEl = el} loop={true}>
						Your browser does not support the <code>audio</code> element.
					</audio>
				)}
				{this.props.children}
			</div>
		);
	}
}

export default BackgroundAudio;