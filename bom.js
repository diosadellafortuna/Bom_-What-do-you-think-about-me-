const uglyButton = document.getElementById("ugly");
const cuteButton = document.getElementById("cute");

let isRunning = false;

document.addEventListener("mousemove", function (e) {
  const rect = uglyButton.getBoundingClientRect();
  const distanceX = Math.abs(e.clientX - (rect.left + rect.width / 2));
  const distanceY = Math.abs(e.clientY - (rect.top + rect.height / 2));

  if (distanceX < 80 && distanceY < 80) {
    if(!isRunning) {
        uglyButton.style.position = "absolute";
        isRunning = true;
    }
    const newLeft = Math.random() * (window.innerWidth - rect.width);
    const newTop = Math.random() * (window.innerHeight - rect.height);
    uglyButton.style.left = `${newLeft}px`;
    uglyButton.style.top = `${newTop}px`;
  }
});

cuteButton.addEventListener("click", function() {
    window.location.href = "bom2.html";
})