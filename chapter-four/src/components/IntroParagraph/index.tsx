import * as React from 'react';

import './IntroParagraph.scss';

interface Props {
	text: string;
}

export default ({ text }: Props) => (
	<p className="IntroParagraph">
		<span>
			{text.substring(0, 1)}
		</span>
		{text.substring(1)}
	</p>
);