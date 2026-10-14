console.log("Ligou");

const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")

botao.onclick = () => {
  // 1. ler
  const n1 = Number(document.querySelector("#nota1").value)
  const n2 = Number(document.querySelector("#nota2").value)
  // 2. calcular
  const media = (n1 + n2) / 2
  // 3. mostrar
  saida.textContent = "Média: " + media.toFixed(1)
}
if (media >= 7) {
    saida.textContent = "Aprovado"
    saida.className = "ok"
}
else {
    saida.textContent = "Reprovado com média " + media.toFixed(1)
    saida.className = "erro"}