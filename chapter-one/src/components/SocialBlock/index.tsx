import * as React from 'react';

import Social from '../Social';

import './SocialBlock.scss';

interface Props {
	url: string;
}

export default ({ url }: Props) => (
	<div className="SocialBlock">
		<Social type="facebook" link={url} />
		<Social type="twitter" link={url} />
		<Social type="reddit" link={url} />
	</div>
); 