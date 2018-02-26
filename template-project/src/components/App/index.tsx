import * as React 	from 'react';
import * as _		from 'lodash';

// components
import NavBar 			from '../NavBar';
import ENLogo 			from '../ENLogo';
import SocialBlock		from '../SocialBlock';
import Hero				from '../Hero';
import Meta				from '../Meta';
import BackgroundAudio	from '../BackgroundAudio';
import SeriesNav		from '../SeriesNav';
import Sections 		from '../Sections';

import './App.scss';

const Story = require('../../story.aml');

// Interfaces
import { AppPosition } from '../../utils/interfaces';

interface State {
	show: boolean;
	appPosition: AppPosition;
}

interface Props {}

const defaultAppPosition: AppPosition = {
	pageOffsetX: 0,
	pageOffsetY: 0,
	pageHeight: 0,
	pageWidth: 0,
};

class App extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			show: false,
			appPosition: defaultAppPosition,
		};
	}

	componentDidMount() {
		window.setTimeout(this.showContent.bind(this), 1500);
		window.addEventListener('scroll', this.setAppPosition.bind(this), false);
		window.addEventListener('resize', this.setAppPosition.bind(this), false);
		this.setAppPosition();
	}

	showContent() {
		this.setState({ show: true });
	}

	getAppPosition() {
		return {
			pageOffsetX: window.pageXOffset,
			pageOffsetY: window.pageYOffset,
			pageHeight: window.innerHeight,
			pageWidth: window.innerWidth,
		};
	}

	setAppPosition() {
		const appPosition = this.getAppPosition();
		if (!_.isEqual(appPosition, this.state.appPosition)) {
			this.setState({ appPosition });
		}
	}

	render() {
		const { show, appPosition } = this.state;
		return (
			<div className="App">
				<div className="Top">
					<BackgroundAudio 
						appPosition={appPosition}
						file={Story.top.hero.audio}
						fraction={0.1}
					>
						<NavBar>
							<div className="left">
								<ENLogo />
							</div>
							<div className="right">
								<SocialBlock url={Story.top.meta.url} />
							</div>
						</NavBar>
						<Hero {...Story.top.hero}>
							<Meta {...Story.top.meta} show={show} />
							<SeriesNav {...Story.seriesnav} current={Story.top.meta.chapter} show={show} />
						</Hero>
					</BackgroundAudio>
				</div>
				<div className="Story">
					<Sections sections={Story.sections} appPosition={appPosition} />
				</div>
			</div>
		);
	}
}

export default App;
