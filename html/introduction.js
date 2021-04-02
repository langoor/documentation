__HTML__.introduction = createElement("div", { class: "introduction-docs" }, [
  createElement("h1", null, ["Introduction"]),
  createElement("div", { class: "heading-break" }),
  createElement("h2", null, ["• What is Langoor?"]),
  createElement("div", null, [
    createElement("p", { style: "margin-top: 10px;" }, [
      "Langoor is a javascript unit testing framework that focuses on error rendering and performance.",
    ]),
  ]),
  createElement("h2", { style: "margin-top: 10px;" }, ["• Installation"]),
  createElement(
    "div",
    { id: "introduction-docs-main", class: "introduction-docs-main" },
    [
      createElement("p", { style: "margin-top: 10px;" }, [
        "Installing langoor with " +
          createElement(
            "a",
            {
              href: "https://www.npmjs.com/package/langoor",
              class: "redirect",
            },
            ["npm"]
          ),
      ]),
      createElement("div", { class: "code bash" }, [
        createElement("p", null, ["npm install --save-dev langoor"]),
      ]),
      createElement("p", { style: "margin-top: 10px;" }, [
        "or with " +
          createElement(
            "a",
            {
              href: "https://yarnpkg.com/package/langoor",
              class: "redirect",
            },
            ["yarn"]
          ),
      ]),
      createElement("div", { class: "code bash" }, [
        createElement("p", null, ["yarn add --dev langoor"]),
      ]),
    ]
  ),
  createElement("h2", { style: "margin-top: 10px;" }, ["• Getting Started"]),
  createElement("p", { style: "margin-top: 10px;" }, [
    "Start by making a file called " +
      createElement("a", { class: "block" }, ["sum.js"]),
  ]),
  createElement("div", { class: "code javascript" }, [
    createElement("p", null, ["function sum(a, b){"]),
    createElement("p", null, ["&nbsp;&nbsp;return a + b;"]),
    createElement("p", null, ["}"]),
    createElement("p", null, ["&nbsp;"]),
    createElement("p", null, ["module.exports = sum;"]),
  ]),
  createElement("p", { style: "margin-top: 10px;" }, [
    "Then, create a file called " +
      createElement("a", { class: "block" }, ["sum.test.js"]),
  ]),
  createElement("div", { class: "code javascript" }, [
    createElement("p", null, ["const sum = require('./sum');"]),
    createElement("p", null, ["&nbsp;"]),
    createElement("p", null, [`test("sum of 2 + 2 = 4", () => {`]),
    createElement("p", null, [`&nbsp;&nbsp;hope(sum(2, 2)).toBe(4);`]),
    createElement("p", null, ["});"]),
  ]),
  createElement("p", { style: "margin-top: 10px;" }, [
    "Then, just run this in your console! ",
  ]),
  createElement("div", { class: "code bash" }, [
    createElement("p", null, ["# in your root folder"]),
    createElement("p", null, ["langoor"]),
  ]),
  createElement("p", { style: "margin-top: 10px;" }, ["Output:"]),
  createElement(
    "div",
    {
      style:
        "background: #282c34; border-radius: 5px; padding: 10px; font-family: monospace; font-size: x-large;",
    },
    [
      createElement("p", null, [
        createElement("a", { style: "background: yellow; color: black;" }, [
          "&nbsp;LOADING",
        ]) + "&nbsp;../sum.test.js",
      ]),
      createElement("p", null, [
        createElement("a", { style: "background: lightgreen; color: black;" }, [
          "&nbsp;PASS",
        ]) +
          createElement("a", { style: "color: lightgreen;" }, [
            "&nbsp;sum of 2 + 2 = 4",
          ]) +
          createElement("a", { style: "color: gray;" }, ["(0ms)"]),
      ]),
      createElement("p", null, ["&nbsp;"]),
      createElement("p", null, [
        createElement("a", { style: "background: #4DA8DA; color: black;" }, [
          "&nbsp;Suites",
        ]) +
          createElement("a", { style: "color: lightgreen;" }, [
            "&nbsp;1 passed",
          ]) +
          "|" +
          createElement("a", { style: "color: red;" }, ["0 failed"]) +
          "| 1 total",
      ]),
      createElement("p", null, [
        createElement("a", { style: "background: #4DA8DA; color: black;" }, [
          "&nbsp;Tests",
        ]) +
          createElement("a", { style: "color: lightgreen;" }, [
            "&nbsp;1 passed",
          ]) +
          "|" +
          createElement("a", { style: "color: red;" }, ["0 failed"]) +
          "| 1 total",
      ]),
    ]
  ),
]);
