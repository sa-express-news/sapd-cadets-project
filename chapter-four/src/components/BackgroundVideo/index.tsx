import * as React 	from 'react';

import BackgroundMediaContainer from '../BackgroundMediaContainer';

import './BackgroundVideo.scss';

// interfaces
import { AppPosition } from '../../utils/interfaces';

interface Props {
	src: string;
	appPosition: AppPosition;
	children: any;
	controls?: boolean;
	muted?: boolean;
	loop?: boolean;
}

const isMobile = () => window.innerWidth < 768;

const useControls = (controls: boolean) => isMobile() ? true : controls; 

class BackgroundVideo extends React.Component<Props> {
	render() {
		const { src, controls = false, muted = false, loop = false } = this.props;
		return (
			<div className="BackgroundVideo">
				{src && (
					<BackgroundMediaContainer {...this.props} startFraction={0.8} endFraction={0.2}>
						<video src={src} muted={muted} loop={loop} preload="auto" controls={useControls(controls)}>
							Your browser does not support the <code>video</code> element.
						</video>
						{this.props.children}
					</BackgroundMediaContainer>
				)}
			</div>
		);
	}
}

export default BackgroundVideo;