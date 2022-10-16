export const pillAnimation = ({
	trigger,
	line,
	pill,
	containerUp,
	containerDown,
}) => {
	const pillTL = gsap
		.timeline()
		.to(pill, 1, { width: 250, height: 616 }, 0)
		.to(line, 1, { width: 656, height: 1100 }, 0)
		.to(pill, 1.5, { width: 124, height: 307 }, 1)
		.to(line, 1.5, { opacity: 0, width: 168, height: 280 }, 1.4)
		.to(containerDown, 1.5, { y: -20 }, 1.5)
		.to(containerUp, 1.5, { y: 20 }, 1.6)
		.pause();

	ScrollTrigger.create({
		trigger,
		animation: pillTL,
		pin: true,
		start: 'top top',
		end: 'bottom-=50 top',
		scrub: 1,
	});
};
