// Desenvolva os seguintes programas em javaScript sem utilizar de funções para arrays: Leia dois vetores de 5 elementos cada (valores inteiros). Crie um terceiro vetor que contenha apenas os elementos que estão em ambos os vetores (interseção, sem repetição). Exemplo: 
//Vetor 1 → [1, 2, 3, 4, 5] 
//Vetor 2 → [3, 4, 5, 6, 7] 
//Resultado → [3, 4, 5]
let vetor1 = [];
let vetor2 = [];
let intersecao = [];
let QtdIntersecao = 0;
for (let i = 0; i < 5; i++) {
    let valor1 = parseInt(prompt("Digite o valor inteiro para o vetor 1, posição " + (i + 1) + ":"));
    let valor2 = parseInt(prompt("Digite o valor inteiro para o vetor 2, posição " + (i + 1) + ":"));
    vetor1[i] = valor1;
    vetor2[i] = valor2;
}
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (vetor1[i] === vetor2[j]) {
            let existe = false;
            for (let k = 0; k < QtdIntersecao; k++) {
                if (intersecao[k] === vetor1[i]) {
                    existe = true;
                    break;
                }
            }
            if (existe === false) {
                intersecao[QtdIntersecao] = vetor1[i];
                QtdIntersecao++;
            }
        }
    }
}
alert("Interseção dos vetores:");
for (let i = 0; i < QtdIntersecao; i++) {
    alert(intersecao[i]);
}