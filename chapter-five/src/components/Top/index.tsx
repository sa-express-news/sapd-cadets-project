import * as React from 'react';

import NavBar 			from '../NavBar';
import ENLogo 			from '../ENLogo';
import SocialBlock		from '../SocialBlock';
import Hero				from '../Hero';
import Meta				from '../Meta';
import BackgroundAudio	from '../BackgroundAudio';
import SeriesNav		from '../SeriesNav';

// Interfaces
import { AppPosition, SeriesNavs } from '../../utils/interfaces';

interface Meta {
	headline: string;
	subhead: string;
	chapter: string;
	author: string;
	photos: string;
	presentation: string;
	date: string;
	series: string;
	url: string;
	show: boolean;
}

interface Hero {
	source: string;
	caption: string;
	cutline: string;
	audio: string;
}

interface Data {
	hero: Hero;
	meta: Meta;
}

interface Props {
	appPosition: AppPosition;
	data: Data;
	seriesNav: SeriesNavs;
	handleMute: Function;
	appIsMuted: boolean;
}

interface State {
	show: boolean;
}

class Top extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			show: false,
		};
	}

	componentDidMount() {
		window.setTimeout(this.showContent.bind(this), 1500);
	}

	showContent() {
		this.setState({ show: true });
	}

	render() {
		const {
			appPosition,
			data,
			seriesNav,
			handleMute,
			appIsMuted
		} 					= this.props;
		const { show }		= this.state;

		return (
			<div className="Top">
				<BackgroundAudio 
					appPosition={appPosition}
					src={data.hero.audio}
					startFraction={0.6}
					endFraction={0}
					appIsMuted={appIsMuted}
				>
					<NavBar>
						<div className="left">
							<ENLogo />
						</div>
						<div className="right">
							<SocialBlock url={data.meta.url} handleMute={handleMute} appIsMuted={appIsMuted} />
						</div>
					</NavBar>
					<Hero {...data.hero}>
						<Meta {...data.meta} show={show} />
						<SeriesNav {...seriesNav} current={data.meta.chapter} show={show} />
					</Hero>
				</BackgroundAudio>
			</div>
		);
	}
}

export default Top;
