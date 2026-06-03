let nomes = [];
let idades = [];        
for (let i = 0; i < 9; i++) {
    let nome = prompt("Digite o nome da pessoa " + (i + 1) + ":");
    let idade = parseInt(prompt("Digite a idade da pessoa " + (i + 1) + ":"));
    nomes[i] = nome;
    idades[i] = idade;
}
alert("Pessoas menores de idade:");
for (let i = 0; i < 9; i++) {
    if (idades[i] < 18) {
        alert("Nome: " + nomes[i] + ", Idade: " + idades[i]);
    }
}
