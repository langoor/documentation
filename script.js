const fs = new FileReader();
const { render } = new Remarkable();
const file = new File("./website.md");
let md = fs.readAsText(file);
document.getElementById("app").innerHTML = `<p>${md}</p>`;
