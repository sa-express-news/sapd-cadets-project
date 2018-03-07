import * as React 	from 'react';

import Section 			from '../Section';
import ComponentMapper 	from '../ComponentMapper';
import Bios				from '../Bios';

// Interfaces
import { AppPosition, Bio } from '../../utils/interfaces';

import './Sections.scss';

interface Props {
	sections: object;
	appPosition: AppPosition;
	appIsMuted: boolean;
	bios: Array<Bio>;
}

const getArrayOfSections = (sections: object) => {
	const arr: Array<object> = [];
	for (let section in sections) {
		if (sections.hasOwnProperty(section)) {
			arr.push(sections[section]);
		}
	}
	return arr;
};

export default (props: Props) => {
	const {
		sections,
		appPosition,
		appIsMuted,
		bios,
	} 						= props;
	const arrayOfSections	= getArrayOfSections(sections);
	
	const components = arrayOfSections.map((section: Array<object>, index: number) => (
		<Section
			data={section}
			mapper={ComponentMapper}
			appPosition={appPosition}
			appIsMuted={appIsMuted}
			bios={bios}
			key={index}
		/>
	));
	return (
		<div className="Sections">
			{components}
			<Bios bios={bios} />
		</div>
	);
};
