
/* GSAP */


gsap.registerPlugin(MotionPathPlugin);

// Rotate bubbles around center
function orbitBubble(bubbleId, radius, duration) {
  gsap.to(`#${bubbleId}`, {
    duration: duration,
    repeat: -1,
    ease: "none",
    motionPath: {
      path: [
        { x: radius, y: 0 },
        { x: 0, y: radius },
        { x: -radius, y: 0 },
        { x: 0, y: -radius },
        { x: radius, y: 0 }
      ],
      align: "self",
      autoRotate: false
    }
  });
}

orbitBubble("bubble1", 60, 8);
orbitBubble("bubble2", 90, 10);
orbitBubble("bubble3", 120, 12);

// Stat counting animation
const counters = document.querySelectorAll(".stat[data-target]");
counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / 100;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target.toLocaleString();
    }
  };
  updateCount();
});