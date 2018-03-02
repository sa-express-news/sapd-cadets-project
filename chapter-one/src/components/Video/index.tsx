import * as React from 'react';

import './Video.scss';

interface Props {
	src: string;
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

export default ({ src, controls = true, muted = false, loop = false }: Props) => <video src={src} onClick={handleClick} muted={muted} loop={loop} preload="auto" width="100%" controls={controls} />;