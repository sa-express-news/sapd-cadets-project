import * as React 	from 'react';

import BackgroundMediaContainer from '../BackgroundMediaContainer';
import PhotoInfo 				from '../PhotoInfo';

import './BackgroundVideo.scss';

// interfaces
import { AppPosition } from '../../utils/interfaces';

interface Props {
	src: string;
	appPosition: AppPosition;
	caption: string;
	controls?: boolean;
	muted?: boolean;
	loop?: boolean;
}

interface State {
	isLocked: boolean;
}

class BackgroundVideo extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			isLocked: false,
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event: any) {
		const paused = event.target.paused;
		if (paused) {
			event.target.play();
			this.setState({ isLocked: false });
		} else { 
			event.target.pause();
			this.setState({ isLocked: true });
		}
	}

	render() {
		const {
			src,
			caption,
			controls = true,
			muted = false,
			loop = false 
		} 						= this.props;
		const { isLocked } 		= this.state;
		return (
			<div className="BackgroundVideo">
				{src && (
					<BackgroundMediaContainer {...this.props} startFraction={0.8} endFraction={0.2} isLocked={isLocked}>
						<video src={src} muted={muted} loop={loop} preload="auto" controls={controls} onClick={this.handleClick}>
							Your browser does not support the <code>video</code> element.
						</video>
						<div className="caption">
							<PhotoInfo caption={caption} />
						</div>
					</BackgroundMediaContainer>
				)}
			</div>
		);
	}
}

export default BackgroundVideo;