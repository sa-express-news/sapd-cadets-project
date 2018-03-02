import * as React from 'react';

import './Button.scss';

interface Props {
	text: string;
	link: string;
}

export default ({ text, link = '' }: Props) => (
	<div>
		{link !== '' && (
			<a href={link}>
				<button className="Button">{text}</button>
			</a>
		)}
		{link === '' && (
			<button className="Button">{text}</button>
		)}
	</div>
);
