let container = document.querySelector(".container");
let button = document.getElementById("spin");
let number = Math.ceil(Math.random() * 9999);

button.onclick = function () {
  container.style.transform = "rotate(" + number + "deg)";
  number = number + Math.ceil(Math.random() * 9999);
};

// number = Math.random();
// number = Math.ceil(Math.random() * 1000);
// console.log(number);
