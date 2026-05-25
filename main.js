const override = document.getElementById("override");
const sharebutton = document.getElementById("sharebutton");
const activeshare = document.getElementById("activeshare");

sharebutton.addEventListener("click", function () {
  console.log("click detectado", override.style.opacity);
  override.style.opacity = "1";
  override.style.zIndex = "2";
});

activeshare.addEventListener("click", function () {
  override.style.opacity = "0";
  override.style.zIndex = "-2";
});

document.addEventListener("click", function (e) {
  console.log(e.target);
});
