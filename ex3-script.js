console.log("hej3");

window.addEventListener("load", start);

function start() {
  document.querySelector("#orange_container").classList.add("move");
  document.querySelector("#orange_container").addEventListener("click", pause);
  document
    .querySelector("#orange_sprite")
    .addEventListener("click", orangeStopJump);
}

function pause() {
  document
    .querySelector("#orange_container")
    .removeEventListener("click", pause);
  document.querySelector("#orange_container").classList.add("paused");
}

function orangeStopJump() {
  document
    .querySelector("#orange_sprite")
    .removeEventListener("click", orangeStopJump);
  document.querySelector("#orange_sprite").classList.add("jump");
}
