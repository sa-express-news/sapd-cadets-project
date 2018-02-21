import * as React from 'react';

import './Paragraph.scss';

export interface Props {
	text: string;
	italic?: boolean;
}

const getClasses = (italic: boolean) => italic ? 'Paragraph italic' : 'Paragraph';

export default ({ text, italic = false }: Props) => <p className={getClasses(italic)}>{text}</p>;
