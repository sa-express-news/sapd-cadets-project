import * as React 	from 'react';
import * as _		from 'lodash';

// components
import Top				from '../Top';
import Sections 		from '../Sections';
import SubscribeFooter	from '../SubscribeFooter';

import './App.scss';

const Story = require('../../story.aml');
const Bios	= require('../../bios.json');

// Interfaces
import { AppPosition } from '../../utils/interfaces';

interface State {
	appPosition: AppPosition;
	appIsMuted: boolean;
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
			appPosition: defaultAppPosition,
			appIsMuted: false,
		};
		this.handleMute = this.handleMute.bind(this);
	}

	componentDidMount() {
		window.addEventListener('scroll', this.setAppPosition.bind(this), false);
		window.addEventListener('resize', this.setAppPosition.bind(this), false);
		this.setAppPosition();
	}

	handleMute(appIsMuted: boolean) {
		this.setState({ appIsMuted });
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
		const { appPosition, appIsMuted } = this.state;
		return (
			<div className="App">
				<Top appPosition={appPosition} data={Story.top} seriesNav={Story.seriesnav} handleMute={this.handleMute} appIsMuted={appIsMuted} />
				<div className="Story">
					<Sections sections={Story.sections} appPosition={appPosition} appIsMuted={appIsMuted} bios={Bios} />
					<SubscribeFooter
						link="https://myaccount.expressnews.com/dssSubscribe.aspx?pid=889&z=00000"
						chapter={Story.top.meta.chapter}
						seriesNav={Story.seriesnav}
					/>
				</div>
			</div>
		);
	}
}

export default App;
