const eyes = document.querySelectorAll(".eye");
const gofer = document.getElementById("gofer-image");
const rekt = gofer.getBoundingClientRect();
const goferX = rekt.left + rekt.width / 2;
const goferY = rekt.top + rekt.height / 2;

document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const angleDeg = angle(mouseX, mouseY, goferX, goferY);

  eyes.forEach((eye) => {
    eye.style.transform = `rotate(${90 + angleDeg}deg)`;
  });
});

function angle(cx, cy, ex, ey) {
  const dy = ey - cy;
  const dx = ex - cx;
  const rad = Math.atan2(dy, dx);
  // prettier-ignore
  const deg = rad * 180 / Math.PI;
  return deg;
}
