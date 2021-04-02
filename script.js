let selectedButtonColor = "#383838";
let __HTML__ = {};

window.addEventListener("load", () => {
  changeRoute("introduction");
  document.getElementById("introduction").style.color = "#39ff14";
  highlight();
});

function hover(button) {
  button.style.background = selectedButtonColor;
}

function hoverEnd(button) {
  button.style.background = "#191919";
}

function changeRoute(route) {
  document.getElementById("app").innerHTML = __HTML__[route];
  highlight();
}

function highlight() {
  document.querySelectorAll("div.code").forEach((block) => {
    hljs.highlightBlock(block);
  });
}

function changeSelectedButton({ id }) {
  changeRoute(id);
  document.querySelectorAll("button.classic-button").forEach((button) => {
    if (button.id === id) {
      button.style.color = "lightgreen";
    } else {
      button.style.background = "#191919";
      button.style.color = "white";
    }
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
    changeSelectedButton(button);
  });
});
