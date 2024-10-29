function sortearNumero() {
const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")

const valor1 = parseInt(input1.value, 10)
const valor2 = parseInt(input2.value, 10)

if (isNaN(valor1) || isNaN(valor2)) {
    document.getElementById("message").innerText = "Insira números válidos em ambos os campos, por favor.";   
    document.getElementById("returnmessage").innerText = ""
    return;
}

if (valor1 === valor2) {
    document.getElementById("message").innerText = "Os números são iguais, insira números diferentes para que eu possa sortear.";
    return;
}

// Gera um número aleatório entre o menor e o maior 
const numeroSorteado = Math.random() < 0.5 ? valor1: valor2;

// Exibe o número sorteado e limpa a mensagem de erro
document.getElementById("message").innerText = "";  
document.getElementById("numerosorteado").innerText = numeroSorteado;

}
