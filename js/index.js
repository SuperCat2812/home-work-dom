let a = document.getElementById("button");
let b = document.getElementById("body");
let c = document.getElementById("img");

a.onclick = function () {
  alert("нажата");
  let leftx = Math.floor(Math.random() * 600);
  let topy = Math.floor(Math.random() * 600);
  a.style.left = leftx + "px";
  a.style.top = topy + "px";
  a.style.backgroundColor = "red";
  b.style.backgroundColor = "black";
  b.style.border = "dashed white";
  c.src = "./img/img2.jfif";
};
