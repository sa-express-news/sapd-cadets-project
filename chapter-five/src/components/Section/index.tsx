import * as React from 'react';

// Interfaces
import { Mapper } 		from '../ComponentMapper';
import { AppPosition } from '../../utils/interfaces';

import './Section.scss';

interface Props {
	data: Array<object>;
	mapper: Mapper;
	appPosition: AppPosition;
}

export default (props: Props) => {
	const { data, mapper, appPosition } = props;

	const components = data.map((object: object, index: number) => {
		return mapper.renderComponent(object, index, appPosition);
	});

	return(
		<div className="Section">
			{components}
		</div>
	);
};
