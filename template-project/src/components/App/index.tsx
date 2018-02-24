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

export interface AppPosition {
	pageOffsetX: number;
	pageOffsetY: number;
	pageHeight: number;
	pageWidth: number;
}

export interface ComponentPosition {
	offsetLeft: number;
	offsetTop: number;
	offsetWidth: number;
	offsetHeight: number;
}

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
		this.getComponentVisiblity = this.getComponentVisiblity.bind(this);
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

	// getComponentVisiblity returns the percentage of a component that is currently visible
	getComponentVisiblity(appPosition: AppPosition, componentPosition: ComponentPosition) {
		const { pageOffsetX, pageOffsetY, pageWidth, pageHeight } 	= appPosition;
		const { offsetLeft, offsetTop, offsetWidth, offsetHeight }	= componentPosition;

		const x 		= offsetLeft;
		const y 		= offsetTop;
		const width 	= offsetWidth;
		const height 	= offsetHeight;

		const right  	= x + width;
		const bottom 	= y + height;
		
		const visX = Math.max(0, Math.min(width, pageOffsetX + pageWidth - x, right - pageOffsetX));
		const visY = Math.max(0, Math.min(height, pageOffsetY + pageHeight - y, bottom - pageOffsetY));

		const amountVisible = visX * visY / (width * height);

		return _.isNaN(amountVisible) ? 0 : amountVisible; // watching for NaN to protect against empty dimensions in inital render 
	}

	render() {
		const { show, appPosition } = this.state;
		return (
			<div className="App">
				<div className="Top">
					<BackgroundAudio 
						appPosition={appPosition}
						file={Story.top.hero.audio}
						getComponentVisiblity={this.getComponentVisiblity}
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
					<Sections sections={Story.sections} />
				</div>
			</div>
		);
	}
}

export default App;
