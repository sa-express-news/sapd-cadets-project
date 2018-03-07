import * as React from 'react';

import BackgroundAudio from '../BackgroundAudio';

import './FullPhoto.scss';

// interfaces
import { AppPosition } from '../../utils/interfaces';

interface Props {
	src: string;
	alt: string;
	appPosition: AppPosition;
	appIsMuted: boolean;
	audio?: string;
}

export default ({ src, alt, appPosition, appIsMuted, audio = '' }: Props) => (
	<BackgroundAudio src={audio} appPosition={appPosition} startFraction={0.8} endFraction={0.2} appIsMuted={appIsMuted}>
		<img className="FullPhoto" src={src} width="100%" alt={alt}/>
	</BackgroundAudio>
);