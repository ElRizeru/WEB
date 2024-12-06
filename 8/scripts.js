document.addEventListener('DOMContentLoaded', function() {
  const imageContainer = document.querySelector('.image-container');
  const image = document.querySelector('.image-container img');

  if (imageContainer && image) {
    let throttleTimer;
    const throttleDelay = 16;

    document.addEventListener('mousemove', function(e) {
      if (!throttleTimer) {
        throttleTimer = setTimeout(() => {
          const windowWidth = window.innerWidth;
          const mouseX = e.clientX;

          const moveX = (mouseX / windowWidth) * 40;
          const moveY = (e.clientY / window.innerHeight) * 20;

          image.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
          throttleTimer = null;
        }, throttleDelay);
      }
    });
  }
   createStars(100);
});
function createStars(count) {
    const starsBackground = document.getElementById('stars-background');
    if (!starsBackground) return;

    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        const size = Math.random() * 3 + 1;
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const duration = Math.random() * 2 + 1;
        const delay = Math.random() * duration;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        star.style.animationDuration = `${duration}s`;
        star.style.animationDelay = `${delay}s`;
        starsBackground.appendChild(star);
    }
}