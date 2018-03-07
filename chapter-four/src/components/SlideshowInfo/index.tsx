import * as React from 'react';

import './SlideshowInfo.scss';

interface Props {
	text: string;
	isHidden: boolean;
}

const getClasses = (isHidden: boolean) => !isHidden ? 'SlideshowInfo show' : 'SlideshowInfo hide';

export default ({ isHidden, text }: Props) => <div className={getClasses(isHidden)}>{text}</div>;