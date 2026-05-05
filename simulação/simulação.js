let saldo = 1000; // Saldo inicial simulado

while (saldo > 0) {
    let saque = parseFloat(prompt("Saldo atual: R$ " + saldo + "\nQuanto deseja sacar?"));

    if (saque <= saldo && saque > 0) {
        saldo -= saque;
        alert("Saque realizado com sucesso!");
    } else {
        alert("Saldo insuficiente ou valor inválido para saque.");
    }
}

console.log("Saldo encerrado. Saldo final: R$ " + saldo);