const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")
const TAXA_SERVICO = 0.1;

botao.onclick = () => {
    const valorConta = Number(document.querySelector("#valor").value);
    const pessoas = Number(document.querySelector("#pessoas").value);
    const valorServico = valorConta * TAXA_SERVICO;
    const total = valorConta + valorServico;
    const porPessoa = total / pessoas;
    saida.textContent = "Valor total: " + "R$" + total.toFixed(2) 
    +"\nValor p/ Pessoa: " + "R$" + porPessoa.toFixed(2) 
    +"\nValor da taxa: " +  "R$" + valorServico.toFixed(2)
    
 

}