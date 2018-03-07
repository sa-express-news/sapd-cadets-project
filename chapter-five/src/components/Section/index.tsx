import * as React from 'react';

// Interfaces
import { Mapper } 		from '../ComponentMapper';
import { AppPosition, Bio } from '../../utils/interfaces';

import './Section.scss';

interface Props {
	data: Array<object>;
	mapper: Mapper;
	appIsMuted: boolean;
	appPosition: AppPosition;
	bios: Array<Bio>;
}

export default (props: Props) => {
	const { data, mapper, appPosition, appIsMuted, bios } = props;

	const components = data.map((object: object, index: number) => {
		return mapper.renderComponent({ object, appPosition, appIsMuted, bios }, index);
	});

	return(
		<div className="Section">
			{components}
		</div>
	);
};
