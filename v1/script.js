let dark = false;
let codeBlocks = document.querySelectorAll("div.code");
let headingBlocks = document.querySelectorAll("div.headings");
let toggleButton = document.getElementById("toggle-theme-btn");

function themeChange() {
  if (dark) {
    document.body.style.background = "white";
    codeBlocks.forEach((block) => {
      block.style.background = "aliceblue";
      block.style.color = "#191919";
    });
    headingBlocks.forEach((block) => {
      block.style.background = "#191919";
      block.style.color = "aliceblue";
    });
    toggleButton.innerText = "🌞";
    toggleButton.style.background = "white";
  } else {
    document.body.style.background = "black";
    codeBlocks.forEach((block) => {
      block.style.background = "#282424";
      block.style.color = "aliceblue";
    });
    headingBlocks.forEach((block) => {
      block.style.background = "aliceblue";
      block.style.color = "#191919";
    });
    toggleButton.innerText = "🌙";
    toggleButton.style.background = "#282424";
  }
  dark = !dark;
}
