let a = document.getElementById("button");
let b = document.getElementById("divbody");
let c = document.getElementById("img");

a.onclick = function () {
  alert("нажата");
  let leftx = Math.floor(Math.random() * 300);
  let topy = Math.floor(Math.random() * 300);
  a.style.left = leftx + "px";
  a.style.top = topy + "px";
  a.style.backgroundColor = "red";
  b.style.backgroundColor = "black";
  b.style.border = "3px dashed white";
  c.src = "./img/img2.jfif";
};
