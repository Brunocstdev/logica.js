
const chute = document.querySelector("#chute");
const botao = document.querySelector("#chutar");
const resultado = document.querySelector("#resultado");

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

botao.onclick = () => {
    const chuteValor = Number(chute.value);
    if (chute.value === "" || chuteValor < 1 || chuteValor > 100) {
        resultado.textContent = "Digite um numero válido"
        resultado.className = "erro"
    } else {
        tentativas++
        if (chuteValor === numeroSecreto) {
            resultado.textContent = "Voce Acertou em " + tentativas + " Tentativas"
            resultado.className = "ok"
        } else if (chuteValor < numeroSecreto) {
            resultado.textContent = chuteValor + " O numero é Maior"
            resultado.className = "alerta"
        } else {
            resultado.textContent = chuteValor + " O numero é Menor"
            resultado.className = "alerta"
        }
    }
}
