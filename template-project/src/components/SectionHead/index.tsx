import * as React from 'react';

import './SectionHead.scss';

interface Props {
	src: string;
}

export default ({ src }: Props) => (
	<div className="SectionHead">
		<hr />
		<img src={src} />
	</div>
);

// import * as React from 'react';

// const { Parallax } = require('react-parallax'); // no typings exist

// import BackgroundAudio from '../BackgroundAudio';

// import './SectionHead.scss';

// // Interfaces
// import { AppPosition } from '../../utils/interfaces';

// interface Props {
// 	title: string;
// 	date: string;
// 	image: string;
// 	audio: string;
// 	appPosition: AppPosition;
// }

// export default (props: Props) => (
// 	<div className="SectionHead">
// 		<hr />
// 		<BackgroundAudio src={props.audio} appPosition={props.appPosition} startFraction={0.8} endFraction={0.8}>
// 			<Parallax
// 				bgImage={props.image}
// 				blur={{min: -1, max: 3}}
// 				strength={500}
// 			>
// 				<div className="wrapper">
// 					<div className="inner">
// 						<h4>{props.title}.</h4>
// 						<h4>{props.date}.</h4>
// 					</div>
// 				</div>
// 			</Parallax>
// 		</BackgroundAudio>
// 	</div>
// );
