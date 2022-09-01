const container = document.querySelector(".data-container");
let genArrayBtn = document.getElementById("genArrayBtn");
genArrayBtn.addEventListener("click", generate);
let ar = []; // to store random values
let hr = []; // for heights
function generateBars() {
  console.log("inside genArray");
  let num = 25;
  for (let i = 0; i < num; i++) {
    const value = Math.floor(Math.random() * 100) + 5;
    ar.push(value);
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${value * 4}px`;
    hr.push(value * 4);
    bar.style.transform = `translateX(${i * 37}px)`;
    const barLabel = document.createElement("label");
    barLabel.classList.add("bar_id");
    barLabel.innerHTML = value;
    bar.appendChild(barLabel);
    container.appendChild(bar);
  }
}
generateBars();
function generate() {
  window.location.reload();
}
