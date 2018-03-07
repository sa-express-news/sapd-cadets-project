import * as React 			from 'react';
import * as ReactTooltip 	from 'react-tooltip';

import './Bios.scss';

import { Bio } from '../../utils/interfaces';

interface Props {
	bios: Array<Bio>;
}

export default ({ bios }: Props) => {
	const tooltips = bios.map((bio: Bio, index: number) => (
		<ReactTooltip id={bio.key} key={index}>
			<div className="bio">
				<h5>{bio.name}</h5>
				<p>{bio.data}</p>
			</div>
		</ReactTooltip>
	));
	return (
		<div className="Bios">{tooltips}</div>
	);
};