let vetor = [];
let soma = 0;
let media = 0;  
for (let i = 0; i < 8; i++) {
    let numero = parseFloat(prompt("Digite um número real:"));
    vetor[i] = numero;
    soma += numero;
}   
media = soma / 8;
alert("Média: " + media);
alert("Valores acima da média:");
for (let i = 0; i < 8; i++) {
    if (vetor[i] > media) {
        alert(vetor[i]);
    }
}
