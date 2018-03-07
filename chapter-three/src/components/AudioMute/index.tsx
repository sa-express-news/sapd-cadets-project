import * as React from 'react';

import './AudioMute.scss';

const active 	= require('../Icons/active-audio.svg');
const muted		= require('../Icons/muted-audio.svg');

interface Props {
	handleMute: Function;
	appIsMuted: boolean;
}

class AudioMute extends React.Component<Props> {
	constructor(props: Props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	getIcon() {
		const { appIsMuted } = this.props;
		return appIsMuted ? muted : active;
	}

	handleClick(event: any) {
		const { appIsMuted, handleMute } = this.props;
		handleMute(!appIsMuted);
	}

	render() {
		return (
			<div className="AudioMute" onClick={this.handleClick}>
				<img src={this.getIcon()} alt="Mute"/>
			</div>
		);
	}
}

export default AudioMute;