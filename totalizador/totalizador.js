let total = 0;
let valorCompra;

do {
    valorCompra = parseFloat(prompt("Insira o valor da compra (0 para finalizar):"));
    total += valorCompra;
} while (valorCompra !== 0);

console.log("O total da compra é: R$ " + total.toFixed(2));