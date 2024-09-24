const sections = document.querySelectorAll(".notshow");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const animationNames = entry.target
          .getAttribute("data-animation")
          .split(" ");
        animationNames.forEach((animationName) => {
          entry.target.classList.add(animationName);
        });
        /* console.log(animationNames); */
      }
    });
  },
  {
    threshold: 0.5,
  }
);

sections.forEach((el) => {
  const animationName = el.getAttribute("data-animation");
  if (animationName) {
    observer.observe(el);
  }
});
