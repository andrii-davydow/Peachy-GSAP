import { coverAnimation } from './coverAnimation.js';
import { pillAnimation } from './pillAnimation.js';

export const initScrollPage = (param) => {
	const { coverContent, pillContent } = param;
	const { animation } = coverContent;

	animation ? coverAnimation(coverContent) : null;

	pillContent ? pillAnimation(pillContent) : null;
};
