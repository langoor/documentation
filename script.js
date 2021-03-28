const fs = new FileReader();
const { render } = new Remarkable();

let md = fs.readAsText("website.md");
document.getElementById("app").innerHTML = `<p>${md}</p>`;
