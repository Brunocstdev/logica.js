
const converter = document.querySelector("#converter");
const resultado = document.querySelector("#resultado");

const convertecelsius = (celsius) => {
    return (celsius * 9 / 5) + 32
} 
const convertefahrenheit = (fahrenheit) => {
    return (fahrenheit - 32) * 5 /9;
}

converter.onclick = () => {
    const celsius = Number(document.querySelector("#celsius").value);
    const fahrenheit = Number(document.querySelector("#fahrenheit").value);
   
    const f = convertecelsius(celsius);
    const c = convertefahrenheit(fahrenheit);

    resultado.textContent = "Fahrenheit:" + f.toFixed(1) + "F°" +
    "\nCelsius:" + c.toFixed(1) + "C°";
}
