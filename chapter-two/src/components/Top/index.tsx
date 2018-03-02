import * as React from 'react';

import NavBar 			from '../NavBar';
import ENLogo 			from '../ENLogo';
import SocialBlock		from '../SocialBlock';
import Hero				from '../Hero';
import Meta				from '../Meta';
import BackgroundAudio	from '../BackgroundAudio';
import SeriesNav		from '../SeriesNav';

// Interfaces
import { AppPosition } from '../../utils/interfaces';

interface Chapter {
	chapter: string;
	desc: string;
}

interface SeriesNav {
	chatter: string;
	chapters: Array<Chapter>;
	current: string;
	show: boolean;
}

interface Meta {
	headline: string;
	subhead: string;
	chapter: string;
	byline: string;
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
	seriesNav: SeriesNav;
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
		const { appPosition, data, seriesNav } = this.props;
		const { show }				= this.state;

		return (
			<div className="Top">
				<BackgroundAudio 
					appPosition={appPosition}
					src={data.hero.audio}
					startFraction={0.6}
					endFraction={0}
				>
					<NavBar>
						<div className="left">
							<ENLogo />
						</div>
						<div className="right">
							<SocialBlock url={data.meta.url} />
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
