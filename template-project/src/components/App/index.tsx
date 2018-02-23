import * as React from 'react';

import NavBar 		from '../NavBar';
import Hero			from '../Hero';
import Meta			from '../Meta';
import SeriesNav	from '../SeriesNav';
import Sections 	from '../Sections';

const Story = require('../../story.aml');

import './App.scss';

export default () => (
	<div className="App">
		<div className="Top">
			<NavBar url={Story.top.meta.url} />
			<Hero {...Story.top.hero}>
				<Meta {...Story.top.meta} />
				<SeriesNav {...Story.seriesnav} current={Story.top.meta.chapter} />
			</Hero>
		</div>
		<div className="Story">
			<Sections sections={Story.sections} />
		</div>
	</div>
);
