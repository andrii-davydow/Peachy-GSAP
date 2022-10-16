import { initScrollPage } from './scrollPage/index.js';

const initDOM = () => {
	initScrollPage({
		coverContent: {
			animation: true,
			header: ['.logo-item', '.task-item', '.action-item'],
			photo: '.pill-item',
			scroll: '.scroll-item',
		},
		pillContent: {
			trigger: '.main-screen',
			line: '.pill-item-line',
			pill: '.pill-item-img',
			containerUp: '.pill-container-up',
			containerDown: '.pill-container-down',
		},
	});
};

document.addEventListener('DOMContentLoaded', function () {
	initDOM();
});
