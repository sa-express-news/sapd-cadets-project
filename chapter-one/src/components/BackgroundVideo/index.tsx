import * as React 	from 'react';

import BackgroundMediaContainer from '../BackgroundMediaContainer';
import PhotoInfo 				from '../PhotoInfo';

import './BackgroundVideo.scss';

// interfaces
import { AppPosition } from '../../utils/interfaces';

interface Props {
	src: string;
	appPosition: AppPosition;
	controls?: boolean;
	muted?: boolean;
	loop?: boolean;
	caption: string;
}

const handleClick = (event: any) => {
	const paused = event.target.paused;
	if (paused) {
		event.target.play();			
	} else { 
		event.target.pause();
	}
}; 

class BackgroundVideo extends React.Component<Props> {
	render() {
		const { src, caption, controls = true, muted = false, loop = false } = this.props;
		return (
			<div className="BackgroundVideo">
				{src && (
					<BackgroundMediaContainer {...this.props} startFraction={0.8} endFraction={0.2}>
						<video src={src} muted={muted} loop={loop} preload="auto" controls={controls} onClick={handleClick}>
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