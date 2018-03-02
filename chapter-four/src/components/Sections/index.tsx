import * as React 	from 'react';

import Section from '../Section';
import ComponentMapper from '../ComponentMapper';

// Interfaces
import { AppPosition } from '../../utils/interfaces';

import './Sections.scss';

interface Props {
	sections: object;
	appPosition: AppPosition;
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
	const { sections, appPosition } = props;
	const arrayOfSections			= getArrayOfSections(sections);
	
	const components = arrayOfSections.map((section: Array<object>, index: number) => <Section data={section} mapper={ComponentMapper} appPosition={appPosition} key={index}/>);
	return (
		<div className="Sections">
			{components}
		</div>
	);
};
