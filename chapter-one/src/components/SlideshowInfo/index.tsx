import * as React from 'react';

import './SlideshowInfo.scss';

interface Props {
	text: string;
	isHidden: boolean;
	photoInfoHeight: number;
}

const getClasses = (isHidden: boolean) => !isHidden ? 'SlideshowInfo show' : 'SlideshowInfo hide';

const setStyles = (height: number) => ({
	bottom: height + 5,
});

export default ({ isHidden, text, photoInfoHeight }: Props) => <div className={getClasses(isHidden)} style={setStyles(photoInfoHeight)}>{text}</div>;