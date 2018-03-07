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
	appIsMuted: boolean;
	controls?: boolean;
	muted?: boolean;
	loop?: boolean;
}

const handleClick = (event: any) => {
	const paused = event.target.paused;
	if (paused) {
		event.target.play();
	} else { 
		event.target.pause();
	}
};

const isLooped = (loop: boolean = false) => loop;

const isControls = (controls: boolean = true) => controls;

export default (props: Props) => {
	const { src, caption, appIsMuted, loop, controls } = props;
	return (
		<div className="BackgroundVideo">
			{src && (
				<BackgroundMediaContainer {...props} startFraction={0.8} endFraction={0.2}>
					<video src={src} muted={appIsMuted} loop={isLooped(loop)} preload="auto" controls={isControls(controls)} onClick={handleClick}>
						Your browser does not support the <code>video</code> element.
					</video>
					<div className="caption">
						<PhotoInfo caption={caption} />
					</div>
				</BackgroundMediaContainer>
			)}
		</div>
	);
};
