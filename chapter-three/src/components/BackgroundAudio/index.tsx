import * as React 	from 'react';

import BackgroundMediaContainer from '../BackgroundMediaContainer';

// interfaces
import { AppPosition } from '../../utils/interfaces';

interface Props {
	src: string;
	appPosition: AppPosition;
	startFraction: number;
	endFraction: number;
	children: any;
}

class BackgroundAudio extends React.Component<Props> {
	render() {
		const { src } = this.props;
		return (
			<div className="BackgroundAudio">
				{src && (
					<BackgroundMediaContainer {...this.props}>
						<audio src={src} loop={true}>
							Your browser does not support the <code>audio</code> element.
						</audio>
						{this.props.children}
					</BackgroundMediaContainer>
				)}
			</div>
		);
	}
}

export default BackgroundAudio;