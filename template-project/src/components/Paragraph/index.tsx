import * as React from 'react';

import './Paragraph.css';

export interface ParagraphProps {
	text: string;
	italic?: boolean;
}

const getClasses = (italic: boolean) => italic ? 'Paragraph italic' : 'Paragraph';

export default ({ text, italic = false }: ParagraphProps) => <p className={getClasses(italic)}>{text}</p>;