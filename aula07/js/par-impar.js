// Exercício 2.2 (Par ou Ímpar) com if/else
// e Exercício 5.1 (Ternário): a mesma decisão em uma linha (comentada abaixo)
const botao = document.querySelector("#verificar")
const saida = document.querySelector("#resultado")

botao.onclick = () => {
  const numero = Number(document.querySelector("#numero").value)
  console.log(numero)
  if(ehPar(numero)) {
    mostrar(`${numero} é par` , "ok");
  } else {
    mostrar(`${numero} é impar` , "alerta");  
  }
  // Versão com ternário (exercício 5.1):
  // const tipo = numero % 2 === 0 ? "par" : "ímpar"
  // saida.textContent = numero + " é " + tipo
  // saida.className = numero % 2 === 0 ? "ok" : "alerta"
}
