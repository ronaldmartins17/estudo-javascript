let nota = 1 // Number(prompt('digite uma nota entre 0 e 10: '))
while (nota < 0 || nota > 10){
  console.log('nota invalida! diigite uma nota entre 0 e 10: ')
}
console.log(`nota atual: ${nota}`)

/*
let num2 = 5
// Usando for...of para iterar e push() para adicionar 
for (let n=1; n<=10; n=n+1) {
  let n2 = n*num2
  console.log(`${num2} x ${n} = ${n2}`); // Exibe a linha da tabuada

}

//  console.log(meuArray); // Saída: [1, 2, 3, 4, 5]

// Alternativa com forEach
//novosValores.forEach(valor => {
  //meuArray.push(valor);
//});
*/