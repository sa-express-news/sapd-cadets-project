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
import SectionHead							from '../SectionHead';
import Parallax								from '../Parallax';
import VideoContainer						from '../VideoContainer';
import BackgroundVideo						from '../BackgroundVideo';

// Interfaces
import { AppPosition, Bio } from '../../utils/interfaces';

interface ComponentProps {
	value: any;
	type: string;
}

interface Map {
	object: ComponentProps;
	appPosition: AppPosition;
	appIsMuted: boolean;
	bios: Array<Bio>;
}

export interface Mapper {
	intrograph: Function;
	text: Function;
	slideshow: Function;
	photo: Function;
	photos: Function;
	pullquote: Function;
	parallax: Function;
	sectionhead: Function;
	video: Function;
	backgroundvideo: Function;
	renderComponent: Function;
}

export default {
	intrograph: ({ object }: Map, key: number) => <IntroParagraph text={object.value.text} key={key} />,

	text: ({ object, bios }: Map, key: number) => <Paragraph text={object.value} bios={bios} key={key} />,

	slideshow: ({ object }: Map, key: number) => <Slideshow photos={object.value} key={key} />,

	photo: function ({ object, appPosition, appIsMuted }: Map, key: number) {
		const photo = object.value;
		const photoPath = photo.source;
		switch (photo.type) {

			case 'full':
				let photoComponent = <FullPhoto src={photoPath} alt={photo.caption} appPosition={appPosition} appIsMuted={appIsMuted} audio={photo.audio} />;
				return <FullPhotoContainer caption={photo.caption} key={key}>{photoComponent}</FullPhotoContainer>;

			case 'small-left':
				let smallPhotoComponent = <SmallPhotoDesktop src={photoPath} alt={photo.caption} />;
				return <SmallPhotoDesktopContainer caption={photo.caption} key={key}>{smallPhotoComponent}</SmallPhotoDesktopContainer>;

			case 'small-right':
				let smallPhotoComponentReverse = <SmallPhotoDesktop src={photoPath} alt={photo.caption} />;
				return <SmallPhotoDesktopContainerReverse caption={photo.caption} key={key}>{smallPhotoComponentReverse}</SmallPhotoDesktopContainerReverse>;

			default:
				return null;
		}
	},

	photos: ({ object, appPosition, appIsMuted }: Map, key: number) => <Photos photos={object.value} key={key} appPosition={appPosition} appIsMuted={appIsMuted} />,

	pullquote: ({ object }: Map, key: number) => <PullQuote quote={object.value.quote} source={object.value.source} key={key} />,

	parallax: ({ object, appPosition, appIsMuted }: Map, key: number) => <Parallax appPosition={appPosition} appIsMuted={appIsMuted} {...object.value} key={key} />,

	sectionhead: ({ object }: Map, key: number) => <SectionHead {...object.value} key={key} />,

	video: ({ object }: Map, key: number) => <VideoContainer {...object.value} key={key} />,

	backgroundvideo: ({ object, appPosition, appIsMuted }: Map, key: number) => <BackgroundVideo appPosition={appPosition} appIsMuted={appIsMuted} {...object.value} key={key} />,

	renderComponent: function ({ object, appPosition, appIsMuted, bios }: Map, key: number) {
		return object.type && this[object.type] ? this[object.type]({ object, appPosition, appIsMuted, bios }, key) : null;
	}
};