let numero = -1;

while (numero < 0) {
    numero = parseFloat(prompt("Digite um número positivo:"));
    if (numero < 0) {
        alert("Valor inválido! Tente novamente.");
    }
}

console.log("Número válido digitado: " + numero);