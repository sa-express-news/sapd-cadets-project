import * as React from 'react';

import './SmallPhotoDesktop.scss';

interface Props {
	src: string;
	alt: string;
}

export default ({ src, alt }: Props) => <img className="SmallPhotoDesktop" src={src} width="100%" alt={alt}/>;