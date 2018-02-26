import * as _ from 'lodash';

import { AppPosition, ComponentPosition } from './interfaces';

// getComponentVisiblity returns the percentage of a component that is currently visible
export const getComponentVisiblity: Function = (appPosition: AppPosition, componentPosition: ComponentPosition) => {
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
};