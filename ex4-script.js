console.log("hej4b");

window.addEventListener("load", start);

function start() {
  console.log("func start");
  //   document.querySelector("#orange_sprite").classList.add("jump");
  document
    .querySelector("#orange_sprite")
    .addEventListener("click", orangeJump);
  document.querySelector("#orange_sprite").addEventListener("click", resetJump);
}

function orangeJump() {
  console.log("func jump");
  document
    .querySelector("#orange_sprite")
    .removeEventListener("click", orangeJump);
  document.querySelector("#orange_sprite").classList.add("jump-once");
}

// det virker ikke det skidt
function resetJump() {
  console.log("func reset");
  document
    .querySelector("#orange_sprite")
    .removeEventListener("click", resetJump);
  document.querySelector("#orange_sprite").classList.remove("jump-once");
  document.querySelector("#orange_sprite").offsetleft;
  document.querySelector("#orange_sprite").classList.add("jump-once");
}

// console.log("hej4a");

// window.addEventListener("load", start);

// function start() {
//   console.log("my start function");
//   document
//     .querySelector("#orange_sprite")
//     .addEventListener("click", orangeJump);
//   document.querySelector("#orange_sprite").addEventListener("click", jumpDone);
// }

// function orangeJump() {
//   console.log("my jump once function");
//   document
//     .querySelector("#orange_sprite")
//     .removeEventListener("click", orangeJump);
//   document.querySelector("#orange_sprite").classList.add("jump-once");
// }

// function jumpDone() {
//   console.log("my jump done function");
//   document
//     .querySelector("#orange_sprite")
//     .removeEventListener("click", jumpDone);
//   document.querySelector("#orange_sprite").classList.remove("jump-once");
//   // document.querySelector("orange_sprite").offsetLeft;
//   document.querySelector("#orange_sprite").classList.add("jump-once");
//   document
//     .querySelector("#orange_sprite")
//     .addEventListener("click", start);
// }

// document.querySelector("#orange_sprite").addEventListener("click", jumpDone);
