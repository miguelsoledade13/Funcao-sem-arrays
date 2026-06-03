let nomes = [];
for (let i = 0; i < 7; i++) {
    nomes[i] = prompt(`Digite o ${i + 1} nome:`);
} 
alert("Nomes em ordem inversa");
for(let i = 6; i >= 0; i--) {
    alert(nomes[i]);
}