const boxInterval = document.getElementById('boxInterval');
const boxAnimationFrame = document.getElementById('boxAnimationFrame');

let intervalAngle = 0;
let animationFrameAngle = 0;

function animateWithInterval() {
  boxInterval.style.transform = 'rotate(' + intervalAngle + 'deg)';
  intervalAngle += 2;
}

// let previousTime;
function animateWithAnimationFrame(currentTime) {
  // console.log(currentTime - previousTime);
  // previousTime = currentTime;
  boxAnimationFrame.style.transform = 'rotate(' + animationFrameAngle + 'deg)';
  animationFrameAngle += 2;
  requestAnimationFrame(animateWithAnimationFrame);
}

// Start the animations
setInterval(animateWithInterval, 1000 / 60); // 60 FPS

requestAnimationFrame(animateWithAnimationFrame);
