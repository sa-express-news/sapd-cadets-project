import * as React from 'react';

import Social 		from '../Social';
import AudioMute	from '../AudioMute';

import './SocialBlock.scss';

interface Props {
	url: string;
	handleMute: Function;
	appIsMuted: boolean;
}

export default ({ url, handleMute, appIsMuted }: Props) => (
	<div className="SocialBlock">
		<AudioMute handleMute={handleMute} appIsMuted={appIsMuted} />
		<Social type="facebook" link={url} />
		<Social type="twitter" link={url} />
		<Social type="reddit" link={url} />
	</div>
); 