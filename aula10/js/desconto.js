const botao = document.querySelector("#calcular");
const saida = document.querySelector("#resultado");

const valorDesconto = (preco, desconto) => {
    return preco * (desconto / 100);
}
const aplicarDesconto = (preco, desconto) => {
    return preco - valorDesconto(preco, desconto);
}

botao.onclick = () => {
    const preco = Number(document.querySelector("#preco").value);
    const desconto = Number(document.querySelector("#desconto").value);
    const descontoValor = valorDesconto(preco, desconto);
    const precoFinal = aplicarDesconto(preco, desconto);
    saida.textContent = "Desconto R$ " + descontoValor.toFixed(2)
    +"\nPreço Final R$ " + precoFinal.toFixed(2);

}