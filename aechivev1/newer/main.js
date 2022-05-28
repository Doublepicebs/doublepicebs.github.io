function change(varr, vall) {
  document.querySelector("body").style.setProperty(varr, vall);
}

let theme = "light";
function switchTheme() {
  if (theme == "dark") {
    change("--main-bg", "#1f1f1f");
    change("--main-color", "#eeeee")
    theme = "light"
    console.log(theme);
  } else if(theme == "light") {
    change("--main-bg", "#eeeeee");
    change("--main-color", "#1f1f1f")
    theme = "dark";
    console.log(theme);
  }
}