import * as React from 'react';

const { Parallax } = require('react-parallax'); // no typings exist

import BackgroundAudio 	from '../BackgroundAudio';
import PhotoInfo		from '../PhotoInfo';

import './Parallax.scss';

// Interfaces
import { AppPosition } from '../../utils/interfaces';

interface Props {
	source: string;
	caption: string;
	audio: string;
	appPosition: AppPosition;
}

export default (props: Props) => (
	<div className="Parallax">
		<BackgroundAudio src={props.audio} appPosition={props.appPosition} startFraction={0.7} endFraction={0.5}>
			<Parallax bgImage={props.source} strength={500}>
				<div className="wrapper" />
			</Parallax>
			<PhotoInfo caption={props.caption}/>
		</BackgroundAudio>
	</div>
);
