const sheet = document.documentElement.style;
const accentInput = document.querySelector("#accent");
function changeAccent() {
  sheet.setProperty("--a", accentInput.value);
}
