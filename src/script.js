gsap.to("#page1", {
  color: "white",
  backgroundColor: "black",
  scrollTrigger: {
    trigger: "#page1",
    start: "top 0%",
    scrub: true,
    pin: true,
  },
});
gsap.to("#page2 h2", {
  transform: "translateX(-60%)",
  scrollTrigger: {
    trigger: "#page2",
    start: "top 0%",
    scrub: true,
    pin: true,
  },
});
gsap.to("#page3", {
  color: "black",
  backgroundColor: "white",
  scrollTrigger: {
    trigger: "#page3",
    start: "top 0%",
    scrub: true,
    pin: true,
  },
});
