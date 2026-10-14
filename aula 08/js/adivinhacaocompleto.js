const chute = document.querySelector("#chute");
const botao = document.querySelector("#chutar");
const resultado = document.querySelector("#resultado");

const limit = 7;
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
let historico = "";
let fim = false;

botao.onclick = () => {
    const chuteValor = Number(chute.value)
    
    if (fim){
        resultado.textContent = "O jogo acabou, clique f5 para jogar novamente"
    } else if (chute.value === "" || chuteValor < 1 || chuteValor > 100){
        resultado.textContent = "Digite um numero Válido de 1 a 100"
        resultado.className = "erro"
    } else{
        tentativas++
        historico += chuteValor + " "
        const restam = limit - tentativas
        if (chuteValor === numeroSecreto){
            resultado.textContent = "Você Acertou em" + tentativas + "Tentativas"
            resultado.className = "ok"
            fim = true
        } else if (restam === 0){
            resultado.textContent = "Suas " + limit + " Tentativas Acabaram. o numero era " + numeroSecreto
            resultado.className = "erro"
            fim = true
        } else if (chuteValor < numeroSecreto){
            resultado.textContent = chuteValor + "  é Maior. Restam " + restam + "Tentativas"
            resultado.className = "alerta"
            
        } else{
            resultado.textContent = chuteValor + "  é Menor. Restam " + restam + "Tentativas"
            resultado.className = "alerta"
        }
        resultado.textContent += "\nChutes: " + historico + ",";

    }
}
