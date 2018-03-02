import * as React from 'react';

import './FullPhoto.scss';

interface Props {
	src: string;
	alt: string;
}

export default ({ src, alt }: Props) => <img className="FullPhoto" src={src} width="100%" alt={alt}/>;