import * as React from 'react';

import PhotoCaption from '../PhotoCaption';

import './PhotoInfo.scss';

interface Props {
	caption: string;
	setHeight?: Function;
}

class PhotoInfo extends React.Component<Props> {
	componentDidMount() {
		this.sendHeight();
		window.addEventListener('resize', this.sendHeight.bind(this));
	}

	sendHeight() {
		const { setHeight } = this.props;
		if (setHeight) {
			const el: HTMLDivElement | null = document.querySelector('.PhotoInfo');
			if (el) {
				const height: number = el.clientHeight;
				if (typeof height === 'number' && height > 0) {
					setHeight(height);
				}
			}
		}
	}

	render() {
		return (
			<div className="PhotoInfo">
				<PhotoCaption text={`${this.props.caption} `}/>
			</div>
		);
	}
}

export default PhotoInfo;