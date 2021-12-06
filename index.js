function changeColor() {
  const buttons = document.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", backgrColor);
  });
  function backgrColor(event) {
    event.preventDefault();
    let color = buttons.getAttribute("id");
    color = "{$color}";
    console.log(color);
    // document.body.style.background = color;
  }
}
