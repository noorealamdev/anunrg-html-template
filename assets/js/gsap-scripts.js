gsap.config({ trialWarn: false });
gsap.registerPlugin(ScrollTrigger, SplitText);
const split = new SplitText(".split-text-section .split-text", { type: "lines" });

split.lines.forEach((target) => {
    gsap.to(target, {
        backgroundPositionX: 0,
        ease: "none",
        scrollTrigger: {
            trigger: target,
            scrub: 1,
            start: "top center",
            end: "bottom center"
        }
    });
});
