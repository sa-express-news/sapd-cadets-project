import * as React from 'react';

import './PhotoCaption.scss';

interface Props {
	text: string;
}

export default ({ text }: Props) => <span className="PhotoCaption">{text}</span> ;