__HTML__.usage = createElement("div", { class: "usage-docs" }, [
  createElement("h1", null, ["Usage"]),
  createElement("div", { class: "heading-break" }),
  createElement("h2", null, ["• How does langoor find your files?"]),
  createElement("div", null, [
    createElement("p", { style: "margin-top: 10px;" }, [
      "Langoor finds your files via a recursive function that digs all your files ending with " +
        createElement("a", { class: "block" }, [".test.js"]) +
        ".",
    ]),
  ]),
]);
