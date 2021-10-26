function screenSize() {
  var width = screen.width;
  var height = screen.height;

  document.getElementById("screen").innerHTML = width + " x " + height;
}

screenSize();

setInterval(() => {
  screenSize();
}, 100);
