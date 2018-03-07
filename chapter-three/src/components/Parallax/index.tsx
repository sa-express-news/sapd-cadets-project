import * as React from 'react';

const { Parallax } = require('react-parallax'); // no typings exist

import PhotoInfo 			from '../PhotoInfo';
import FullPhotoContainer 	from '../FullPhotoContainer';
import FullPhoto			from '../FullPhoto';
import BackgroundAudio		from '../BackgroundAudio';

import './Parallax.scss';

import { AppPosition } from '../../utils/interfaces';

interface Props {
	source: string;
	caption: string;
	appPosition: AppPosition;
	audio?: string;
}

const isMobile = () => window.innerWidth < 768;

const getAudio = (audio: string = '') => audio;

export default (props: Props) => (
	<div className="Parallax">
		<BackgroundAudio src={getAudio(props.audio)} appPosition={props.appPosition} startFraction={0.8} endFraction={0.2}>
			{!isMobile() && (
				<div>
					<Parallax bgImage={props.source} strength={500}>
						<div className="wrapper" />
					</Parallax>
					<div className="photoInfoWrap">
						<PhotoInfo caption={props.caption}/>
					</div>
				</div>
			)}
			{isMobile() && (
				<FullPhotoContainer caption={props.caption}>
					<FullPhoto src={props.source} alt={props.caption} appPosition={props.appPosition} />
				</FullPhotoContainer>
			)}
		</BackgroundAudio>
	</div>
);
