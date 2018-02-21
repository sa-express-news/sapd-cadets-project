import * as React from 'react';

import NavBar 	from '../NavBar';
import Sections from '../Sections';

const Story = require('../../story.aml');

import './App.scss';

export default () => (
	<div className="App">
		<div className="Story">
			<NavBar url={Story.top.meta.url} />
			<Sections sections={Story.sections} />
		</div>
	</div>
);
