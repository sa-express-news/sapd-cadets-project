import * as React from 'react';

import Section from '../Section';
import ComponentMapper from '../ComponentMapper';
import Bios from '../Bios';

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
	} = props;
	const arrayOfSections = getArrayOfSections(sections);

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
			<p className="Paragraph"><em>(Postscript: Officer Steve Abbott, the driving instructor, died in January, weeks after being diagnosed with cancer.)</em></p>
			<p className="Paragraph"><em>Emilie Eaton is a San Antonio Express-News staff writer. You can reach her at <a href="mailto:eeaton@express-news.net">eeaton@express-news.net</a>.</em></p>
			<Bios bios={bios} />
		</div>
	);
};
