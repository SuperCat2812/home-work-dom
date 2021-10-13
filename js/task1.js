let a = document.getElementById("button");

a.onclick = function () {
  let leftx = Math.floor(Math.random() * 600);
  let topy = Math.floor(Math.random() * 600);
  a.style.left = leftx + "px";
  a.style.top = topy + "px";
};
