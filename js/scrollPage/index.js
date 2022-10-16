import { coverAnimation } from './coverAnimation.js';

export const initScrollPage = (param) => {
	const { coverContent, pillContent } = param;
	const { animation } = coverContent;

	animation ? coverAnimation(coverContent) : null;
};
