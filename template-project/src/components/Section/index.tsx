import * as React from 'react';

// Interfaces
import { Mapper } from '../ComponentMapper';

import './Section.css';

interface Props {
	data: Array<object>;
	mapper: Mapper;
}

export default (props: Props) => {
	const { data, mapper } = props;

	const components = data.map((object: object, index: number) => {
		return mapper.renderComponent(object, index);
	});

	return(
		<div className="Section">
			{components}
		</div>
	);
};
