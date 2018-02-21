import * as React from 'react';

// Components
import Paragraph from '../Paragraph';

interface ComponentProps {
	value: string;
	type: string;
}

export interface Mapper {
	text: Function;
	renderComponent: Function;
}

export default {
	text: (object: ComponentProps, key: number) => <Paragraph text={object.value} key={key} />,

	renderComponent: function (object: ComponentProps, key: number) {
		return object.type && this[object.type] ? this[object.type](object, key) : null;
	}
};