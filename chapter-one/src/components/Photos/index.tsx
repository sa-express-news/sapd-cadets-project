import * as React from 'react';

import FullPhotoContainer 	from '../FullPhotoContainer';
import FullPhoto 			from '../FullPhoto';

interface Photo {
	source: string;
	caption: string;
}

import { AppPosition } from '../../utils/interfaces';

interface Props {
	photos: Array<Photo>;
	appPosition: AppPosition;
	appIsMuted: boolean;
}

export default (props: Props) => {
	const components = props.photos.map((photo: Photo, key: number) => {
		let photoComponent = <FullPhoto src={photo.source} alt={photo.caption} appPosition={props.appPosition} appIsMuted={props.appIsMuted} />;
		return <FullPhotoContainer caption={photo.caption} key={key}>{photoComponent}</FullPhotoContainer>;
	});

	return (
		<div className="Photos">
			{components}
		</div>
	);
};