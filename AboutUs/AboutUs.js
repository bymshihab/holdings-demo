function animateValue(id, start, end, duration) {
  const obj = document.getElementById(id);
  const range = end - start;
  let startTime = null;

  function step(currentTime) {
    if (!startTime) startTime = currentTime;
    const progress = currentTime - startTime;
    const current = Math.round(start + range * (progress / duration));
    obj.innerText = current > end ? end : current;
    if (progress < duration) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".count");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const endValue = parseInt(
            entry.target.getAttribute("data-end-value"),
            10
          );
          animateValue(id, 0, endValue, 2000);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 1.0 }
  );

  counters.forEach((counter) => observer.observe(counter));
});
