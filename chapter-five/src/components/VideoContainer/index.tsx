import * as React from 'react';

import Video		from '../Video';
import PhotoInfo 	from '../PhotoInfo';

import './VideoContainer.scss';

interface Props {
	src: string;
	caption?: string;
	controls?: boolean;
	muted?: boolean;
	loop?: boolean;
}

export default ({ src, caption = '', controls = true, muted = false, loop = false }: Props) => (
	<div className="VideoContainer">
		<Video src={src} muted={muted} loop={loop} controls={controls} />
		<PhotoInfo caption={caption} />
	</div>
);