export const coverAnimation = ({ header, photo, scroll }) => {
	gsap
		.timeline()
		.fromTo(
			header,
			{ opacity: 0, y: -100 },
			{ opacity: 1, y: 0, stagger: 0.2 },
			0
		)
		.fromTo(
			photo,
			{ opacity: 0, scale: 0 },
			{ opacity: 1, scale: 1, stagger: 0.1 },
			0.1
		)
		.fromTo(scroll, { opacity: 0, y: 100 }, { opacity: 1, y: 0 }, 0.2);
};
