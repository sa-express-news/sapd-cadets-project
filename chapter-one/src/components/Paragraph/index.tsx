import * as React from 'react';

import './Paragraph.scss';

import { Bio } from '../../utils/interfaces';

export interface Props {
	text: string;
	bios: Array<Bio>;
	italic?: boolean;
}

const getClasses = (italic: boolean) => italic ? 'Paragraph italic' : 'Paragraph';

const getMatch = (text: string) => /<bio>(.*?)<\/bio>/g.exec(text);

const getPreMatch = (text: string, match: any) => text.slice(0, match.index);

const getPostMatch = (text: string, match: any) => {
	const start = match.index + match[0].length;
	return text.slice(start);
};

const bindBioTooltip = (text: string) => <span className="bio" data-tip={true} data-for={text}>{text}</span>;

export default ({ text, bios, italic = false }: Props) => {
	const match = getMatch(text);

	if (!match) {
		return <p className={getClasses(italic)}>{text}</p>;
	} else {	
		const preMatch: string = getPreMatch(text, match);
		const postMatch: string = getPostMatch(text, match);
		const bio = bindBioTooltip(match[1]);
		return (
			<p className={getClasses(italic)}>
				{preMatch}{bio}{postMatch}
			</p>
		);
	}
};
