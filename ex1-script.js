console.log("hej");

window.addEventListener("load", start);

function start() {
  document
    .querySelector("#orange_container")
    .addEventListener("click", orangeJump);
}

function orangeJump() {
  document
    .querySelector("#orange_container")
    .removeEventListener("click", orangeJump);
  document.querySelector("#orange_container").classList.add("jump");
}
