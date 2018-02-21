import * as React 	from 'react';

import Section from '../Section';
import ComponentMapper from '../ComponentMapper';

interface Props {
	sections: object;
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
	const { sections } 		= props;
	const arrayOfSections	= getArrayOfSections(sections);
	const components		= arrayOfSections.map((section: Array<object>, index: number) => <Section data={section} mapper={ComponentMapper} key={index}/>);
	return (
		<div className="Sections">
			{components}
		</div>
	);
};
