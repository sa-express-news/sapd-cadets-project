import * as React from 'react';

import Sections from '../Sections';

const Story = require('../../story.aml');

import './App.css';

export default () => (
	<div className="App">
		<div className="Story">
			<Sections sections={Story.sections}/>
		</div>
	</div>
);
