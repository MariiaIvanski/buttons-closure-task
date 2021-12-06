const buttons = document.querySelectorAll("button");
buttons.forEach((btn) => {
  btn.addEventListener("click", changeColor);
});

function changeColor(event) {
  event.preventDefault();
  console.log(event.target.id);
  let color = event.target.id;
  backgrColor(color);
}

function backgrColor(color) {
  document.body.style.background = color;
}

//function backgrColor(event) {
//  event.preventDefault;

//console.log(btn.getAttribute("id"));
// var color = id;
//function backgrColor() {
// console.log(color);
