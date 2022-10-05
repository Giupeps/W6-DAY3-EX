let mainContainer = document.querySelector("main");
let colors = [
  "red",
  "green",
  "blue",
  "orangered",
  "aquamarine",
  "blueviolet",
  "brown",
];
let i = 0;

function showImage() {
  let getImage = document.querySelector("#imgContainer");
  getImage.innerHTML = "";
  getImage.innerHTML += `<img src="https://www.repstatic.it/content/nazionale/img/2022/09/26/213552042-c8a02d29-a0d3-4e23-82d2-0588f22c41d6.jpg">`;
}

function changeColor() {
  mainContainer.style.backgroundColor = colors[i];
  i++;
}
