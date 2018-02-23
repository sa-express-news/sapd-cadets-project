import * as React from 'react';

import './Meta.scss';

interface Props {
	headline: string;
	subhead: string;
	chapter: string;
	byline: string;
	date: string;
	series: string;
	url: string;
}

interface State {
	componentClasses: Array<string>;
}

class Meta extends React.Component<Props, State> { 
	constructor(props: Props) {
		super(props);
		this.state = {
			componentClasses: ['Meta'],
		};
	}

	componentDidMount() {
		window.setTimeout(this.showContent.bind(this), 1500);
	}

	showContent() {
		const { componentClasses } = this.state;
		componentClasses.push('show');
		this.setState({ componentClasses });
	}

	render() {
		const {
			headline,
			series,
			chapter,
			subhead,
			byline,
			date
		} 							= this.props;
		const { componentClasses } 	= this.state;

		return (
			<div className={componentClasses.join(' ')}>
				<h1>{headline}</h1>
				<h2>{series}</h2>
				<hr className="top" />
				<h3>{chapter}</h3>
				<hr className="bottom" />
				<h3 className="subhead">{subhead}</h3>
				<h4>By {byline}</h4>
				<h4>Published {date}</h4>
				<div className="spacer" />
			</div>
		);
	}
}

export default Meta;