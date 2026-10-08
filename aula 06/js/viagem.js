const  enviar = document.querySelector("#enviar");
const resultado = document.querySelector("#resultado");

enviar.onclick = () => {
    const distanciaKm = Number(document.querySelector("#distancia").value);
    const litro = Number(document.querySelector("#litro").value);
    const preco = Number(document.querySelector("#preco").value);
    
    const precoLitro = distanciaKm / litro; 
    const custoIda = precoLitro * preco;
    const custoVolta = custoIda *2;

    resultado.textContent = "Consumo p/ litros (L): " + precoLitro.toFixed(1)
    +"\n Custo da ida (R$): " + custoIda.toFixed(2) + "\n Custo volta (R$): " + custoVolta.toFixed(2)

}