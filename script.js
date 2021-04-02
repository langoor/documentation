let hoverColor = "#383838";
let hoverEndColor = "#191919";

window.addEventListener("load", () => {
  highlight();
});

function hover(button) {
  button.style.background = hoverColor;
}

function hoverEnd(button) {
  button.style.background = hoverEndColor;
}

function redirect({ id }) {
  window.location.href = "/documentation/" + id;
}

function highlight() {
  document.querySelectorAll("div.code").forEach((block) => {
    hljs.highlightBlock(block);
  });
}

document.querySelectorAll("button.classic-button").forEach((button) => {
  button.addEventListener("mouseover", function () {
    hover(button);
  });

  button.addEventListener("mouseout", () => {
    hoverEnd(button);
  });

  button.addEventListener("click", () => {
    redirect(button);
  });
});
