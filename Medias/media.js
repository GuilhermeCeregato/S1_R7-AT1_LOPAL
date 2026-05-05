let soma = 0;
let contador = 0;
let nota = 0;

while (true) {
    nota = parseFloat(prompt("Digite uma nota (ou um número negativo para sair):"));
    
    if (nota < 0) break; // Sai do laço
    
    if (nota >= 0 && nota <= 10) {
        soma += nota;
        contador++;
    } else {
        alert("Por favor, digite uma nota entre 0 e 10.");
    }
}

if (contador > 0) {
    let media = soma / contador;
    console.log("Média das notas: " + media.toFixed(2));
} else {
    console.log("Nenhuma nota válida foi inserida.");
}