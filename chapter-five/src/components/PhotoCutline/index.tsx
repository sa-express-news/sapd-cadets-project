import * as React from 'react';

import './PhotoCutline.scss';

interface Props {
	text: string;
}

export default ({ text }: Props) => <span className="PhotoCutline">({text})</span>;