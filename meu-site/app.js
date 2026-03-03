console.log("app.js carregou");
document.body.style.border = "8px solid red";
const btn = document.getElementById("btn");
const out = document.getElementById("out");

btn.addEventListener("click", () => {
  out.textContent = "Funcionou.";
});