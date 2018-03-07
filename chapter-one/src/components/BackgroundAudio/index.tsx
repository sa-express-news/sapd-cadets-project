import * as React 	from 'react';

import BackgroundMediaContainer from '../BackgroundMediaContainer';

// interfaces
import { AppPosition } from '../../utils/interfaces';

interface Props {
	src: string;
	appPosition: AppPosition;
	startFraction: number;
	endFraction: number;
	appIsMuted: boolean;
	children: any;
	loop?: boolean;
}

class BackgroundAudio extends React.Component<Props> {
	loopAudio() {
		const { loop } = this.props;
		return !!loop;
	}

	render() {
		const { src, appIsMuted } = this.props;
		return (
			<div className="BackgroundAudio">
				<BackgroundMediaContainer {...this.props}>
					{src && (
						<audio src={src} loop={this.loopAudio()} muted={appIsMuted}>
							Your browser does not support the <code>audio</code> element.
						</audio>
					)}
					{this.props.children}
				</BackgroundMediaContainer>
			</div>
		);
	}
}

export default BackgroundAudio;