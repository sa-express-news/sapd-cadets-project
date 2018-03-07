import * as React from 'react';

import FacebookLogo from './FacebookLogo';
import TwitterLogo 	from './TwitterLogo';
import RedditLogo 	from './RedditLogo';

import './Social.scss';

interface Socials {
	facebook: React.SFC;
	twitter: React.SFC;
	reddit: React.SFC;
}

interface Props {
	link: string;
	type: string;
}

const components: Socials = {
	facebook: FacebookLogo,
	twitter: TwitterLogo,
	reddit: RedditLogo, 
};

class Social extends React.Component<Props> {
	redditLink() {
		const link = this.props.link;
		return `https://www.reddit.com/submit?url=${link}`;
	}

	twitterLink() {
		return `https://twitter.com/intent/tweet?url=${this.props.link}`;
	}

	facebookLink() {
		return `https://www.facebook.com/sharer/sharer.php?u=${this.props.link}`;
	}

	logoLink() {
		return this.props.link;
	}

	buildIcon(type: string) {
		const Icon = components[type];
		const link = this[`${type}Link`]();
		return <a href={link} target="_blank"><Icon /></a>;
	}

	render() {
		return (
			<div className="Social">
				{this.buildIcon(this.props.type)}
			</div>
		);
	}
}

export default Social;