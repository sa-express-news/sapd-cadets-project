import * as React from 'react';

import './SlideshowButton.scss';

interface Props {
	right: boolean;
	onClick: any;
}

export default ({ right, onClick }: Props) => {
	const arrow = right ? '>' : '<';
	const className = `SlideshowButton-container ${right ? 'right' : 'left'}`;
	return (
		<div className={className}>
			<div className="SlideshowButton" onClick={onClick}>
				{arrow}
			</div>
		</div>
	);
};