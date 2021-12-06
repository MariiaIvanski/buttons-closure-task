const buttons = document.querySelectorAll("button");
buttons.forEach((btn) => {
  btn.addEventListener("click", changeColor);
});

function changeColor(event) {
  event.preventDefault();
  let color = event.target.id;
  backgrColor(color);

  function backgrColor(color) {
    document.body.style.background = color;
  }
}
