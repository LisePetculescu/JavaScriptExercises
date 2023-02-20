console.log("hej2");

window.addEventListener("load", start);

function start() {
  document.querySelector("#blue_container").addEventListener("click", blueFall);
}

function blueFall() {
  document
    .querySelector("#blue_container")
    .removeEventListener("click", blueFall);
  document.querySelector("#blue_container").classList.add("fallover");
}
