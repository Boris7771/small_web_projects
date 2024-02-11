const containerEl = document.getElementById("container");

const innerText = `Hello World`;
containerEl.innerText = innerText;

let name = "Matey";
let par = `<p>hello ${name}</p>`;
console.log(par);
containerEl.innerHTML += par;
