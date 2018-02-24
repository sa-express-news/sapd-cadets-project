import * as React from 'react';

// Components
import Paragraph 							from '../Paragraph';
import IntroParagraph 						from '../IntroParagraph';
import Slideshow 							from '../Slideshow';
import FullPhoto 							from '../FullPhoto';
import FullPhotoContainer 					from '../FullPhotoContainer';
import SmallPhotoDesktop 					from '../SmallPhotoDesktop';
import SmallPhotoDesktopContainer 			from '../SmallPhotoDesktopContainer';
import SmallPhotoDesktopContainerReverse 	from '../SmallPhotoDesktopContainerReverse';
import Photos 								from '../Photos';
import PullQuote							from '../PullQuote';

interface ComponentProps {
	value: any;
	type: string;
}

export interface Mapper {
	intrograph: Function;
	text: Function;
	slideshow: Function;
	photo: Function;
	photos: Function;
	pullquote: Function;
	renderComponent: Function;
}

export default {
	intrograph: (object: ComponentProps, key: number) => <IntroParagraph text={object.value.text} key={key} />,

	text: (object: ComponentProps, key: number) => <Paragraph text={object.value} key={key} />,

	slideshow: (object: ComponentProps, key: number) => <Slideshow photos={object.value} key={key} />,

	photo: function (object: ComponentProps, key: number) {
		const photo = object.value;
		const photoPath = photo.source;
		switch (photo.type) {

			case 'full':
				let photoComponent = <FullPhoto src={photoPath} alt={photo.caption} />;
				return <FullPhotoContainer caption={photo.caption} cutline={photo.cutline} key={key}>{photoComponent}</FullPhotoContainer>;

			case 'small-left':
				let smallPhotoComponent = <SmallPhotoDesktop src={photoPath} alt={photo.caption} />;
				return <SmallPhotoDesktopContainer caption={photo.caption} cutline={photo.cutline} key={key}>{smallPhotoComponent}</SmallPhotoDesktopContainer>;

			case 'small-right':
				let smallPhotoComponentReverse = <SmallPhotoDesktop src={photoPath} alt={photo.caption} />;
				return <SmallPhotoDesktopContainerReverse caption={photo.caption} cutline={photo.cutline} key={key}>{smallPhotoComponentReverse}</SmallPhotoDesktopContainerReverse>;

			default:
				return null;
		}
	},

	photos: (object: ComponentProps, key: number) => <Photos photos={object.value} key={key} />,

	pullquote: (object: ComponentProps, key: number) => <PullQuote quote={object.value.quote} source={object.value.source} key={key} />,

	renderComponent: function (object: ComponentProps, key: number) {
		return object.type && this[object.type] ? this[object.type](object, key) : null;
	}
};