const config = {
	duration: 1000,
};

const animate = () => {
	const reveals = document.querySelectorAll("div");

	for (var i = 0; i < reveals.length; i++) {
		const reveal = reveals[i];
		const anim = reveal.getAttribute("data-aos");
		const duration = reveal.getAttribute("data-aos-duration");
		if (!anim) continue;
		const windowHeight = window.innerHeight;
		const elementTop = reveal.getBoundingClientRect().top;
		const elementVisible = 100;
		if (elementTop < windowHeight - elementVisible) {
			reveal.style.animation = `${anim}  ${duration || config.duration}ms`;
		} else {
			reveal.style.animation = "";
		}
	}
};

window.addEventListener("scroll", animate);
