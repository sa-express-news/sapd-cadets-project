import * as React from 'react';

import FullPhotoContainer 	from '../FullPhotoContainer';
import FullPhoto 			from '../FullPhoto';

interface Photo {
	source: string;
	caption: string;
}

interface Props {
	photos: Array<Photo>;
}

export default ({photos}: Props) => {
	const components = photos.map((photo: Photo, key: number) => {
		let photoComponent = <FullPhoto src={photo.source} alt={photo.caption}/>;
		return <FullPhotoContainer caption={photo.caption} key={key}>{photoComponent}</FullPhotoContainer>;
	});

	return (
		<div className="Photos">
			{components}
		</div>
	);
};