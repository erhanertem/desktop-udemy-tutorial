function smoothScrollToTop() {
  const duration = 1000; // Duration in milliseconds
  const start = window.scrollY;
  const end = 0;
  const change = end - start;
  let startTime = null;

  function animateScroll(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;

    const progress = Math.min(timeElapsed / duration, 1);

    window.scrollTo(0, start + change * progress);
    console.log(timeElapsed);
    if (timeElapsed < duration) {
      requestAnimationFrame(animateScroll);
    }
  }

  requestAnimationFrame(animateScroll);
}

document
  .querySelector('.back-to-top')
  .addEventListener('click', smoothScrollToTop);
