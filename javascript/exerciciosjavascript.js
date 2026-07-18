//Você OBRIGATORIAMENTE precisa desta linha no topo:
const prompt = require('prompt-sync')();

// #region validar nota  COMENTADO
    /*
    let nota = Number(prompt('digite uma nota entre 0 e 10: '));
    while (nota < 0 || nota > 10 || isNaN(nota)){ 
        nota = Number(prompt('nota inválida! digite uma nota entre 0 e 10: '));
    }
    alert(`nota atual: ${nota}`);
    */

function validarNota() {
    const notaInput = document.querySelector("#notaInput");
    let nota = Number(notaInput.value);
    const resultado = document.querySelector("#res");
    if (nota < 0 || nota > 10 || isNaN(nota)){   //isNaN() verifica se o valor é um número ou não.
        resultado.innerText = `digite nvamente uma nota válida entre 0 e 10.`;
        notaInput.value = ''; // Limpa o campo de entrada
        notaInput.focus(); // Foca no campo novamente
        return false;
    }else{
        resultado.innerText = `nota atual: ${nota}`;
        return true;
    }
    //alert(`nota atual: ${nota}`);
}
// #endregion

// #region validar usuario e senha 
    /*
    Faça um programa que leia um nome de usuário e a sua senha e não 
    aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro 
    e voltando a pedir as informações.
    */

function validarUsuarioSenha(){
    const usuarioInput = document.querySelector("#usuario");
    const usuario = usuarioInput.value.trim();  //trim()  para impédir de validar espaços
    const senhaInput = document.querySelector("#senha");
    const senha = senhaInput.value;
    const resultadoUsuarioSenha = document.querySelector("#resultadoUsuarioSenha");          

    if (usuario === '' || senha === '') {
        resultadoUsuarioSenha.innerText = "Por favor, preencha todos os campos.";
        resultadoUsuarioSenha.style.color = 'orange';
        return false;
    }else if (usuario === senha){
        resultadoUsuarioSenha.innerText = `A senha nao pode ser igual ao nome de usuário. Por favor, tente novamente.`;   
        senhaInput.value = ''; // Limpa o campo de senha
        senhaInput.focus(); // Foca no campo de senha 
        resultadoUsuarioSenha.style.color = 'red'; // Altera a cor do texto para vermelho  
        return false;
    }else{
        resultadoUsuarioSenha.innerText = `Usuário e senha cadastrados com sucesso!`;
        resultadoUsuarioSenha.style.color = 'green'; // Altera a cor do texto para verde
        return true;
    }
}
// #endregion

// #region verificar informaçoes  COMENTADO
    /*
    Faça um programa que leia e valide as seguintes informações:
    Nome: maior que 3 caracteres;
    Idade: entre 0 e 150;
    Salário: maior que zero;
    Sexo: 'f' ou 'm';
    Estado Civil: 's', 'c', 'v', 'd';
    Dica: se sua variável é texto, o tamanho dela está armazenado em: texto.length  
    */

function validardados() {
    const nomeInput = document.querySelector("#nome"); 
    const nome = nomeInput.value;

    const idadeInput = document.querySelector("#idade");
    const idade = Number(idadeInput.value);

    const salarioInput = document.querySelector("#salario");
    const salario = Number(salarioInput.value);

    const sexo = document.querySelector('[name="sexo"]:checked'); // pega os valores do input sexo e armazena na variavel sexo
    //Usamos let para variável que muda muda o valor 
    let genero = sexo ? sexo.value:'';    
    // coloca o valor de sexo na variavel genero como um array assim posso escolher selecionando o arquivo como um array

    const estadocivil = document.querySelector('[name="estadocivil"]:checked');
    let relacionamento = estadocivil ? estadocivil.value:'';  // Use de let para variável que muda

    const informacoes = document.querySelector("#informacoes");

    if (nome.length < 3) {
    informacoes.innerText=`tamanho ${nome}  menor que 3 caracteres`;
    return false;
    }else if(idade < 0 || idade > 150) {
        informacoes.innerText=`sua idade esta errada voce tem: ${idade} anos`;
        return false;
    }else if (salario <= 0){
        informacoes.innerText=`o seu salario é : ${salario}  trabalho escravo é errado`;
        return false;
    }else if (genero == '') {
        informacoes.innerText=`selecione o sexo!`;
        return false;
    }else if(relacionamento ==''){
        informacoes.innerText=`selecione o estado civil!`;
        return false;
    }else{
        informacoes.innerText=`sexo: ${genero}  e  ${relacionamento}`;
        return true;
    }

}
// #endregion

// #region calculo populacional  COMENTADO
    /*
    Supondo que a população de um país A seja da ordem de 80000 habitantes 
    com uma taxa anual de crescimento de 3% e que a população de B seja 200000 habitantes 
    com uma taxa de crescimento de 1.5%. 
    Faça um programa que calcule e escreva o número de anos necessários para que a população do país 
    A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.
    */
/*
let populacaoA = 80000;   //numero de Habitantes da cidadeA
let taxaA = 0.03;  //taxa de crescimento anual da população 3%
let populacaoB = 200000;  //numero de Habitantes da cidadeB
let taxaB = 0.015;  //taxa de crescimento anual da populacao 1.5% 
let anos = 0;  //contador de anos
if (populacaoA > populacaoB) { //verifica se a populaçao da cidade A e maior 
    console.log(`A cidade A tem mais abitantes que a cidadeB  `);
    console.log(`O numero de habitantes da cidadeA é: ${populacaoA}`);  
    console.log(`O numero de habitantes da cidadeB é: ${ populacaoB}`);
} else {  //se a população da cidade B for maior entao entra no loop
    while (populacaoA < populacaoB) {
    populacaoA += populacaoA * taxaA;  //cresce 3% ao ano
    populacaoB += populacaoB * taxaB;  //cresce 1.5% ao ano
    anos++; //incrementa contador de anos 
    }
}
console.log(`Anos necessários: ${anos}`);
console.log(`População A: ${Math.round(populacaoA)} habitantes`);
console.log(`População B: ${Math.round(populacaoB)} habitantes`);
*/

// #endregion

// #region calculo populacional com input no html
    /*
    Altere o programa anterior permitindo ao usuário informar as populações e as taxas de crescimento iniciais. 
    Valide a entrada e permita repetir a operação.
    */

function taxacrescimento() {
    const populacaoAinput = document.querySelector("#populacao-A").value;  
    const taxaAinput = document.querySelector("#taxa-A").value;

    const populacaoBinput = document.querySelector("#populacao-B").value; // aqui eu uso value para verificar os valores
                                                                         //  antes de converter para number
    const taxaBinput = document.querySelector("#taxa-B").value;

    const resultado = document.querySelector("#resul");

    let anos = 0
    const max_anos = 1000

    if (populacaoAinput.trim() === "" || populacaoBinput.trim() === "" || taxaAinput.trim() === "" || taxaBinput.trim() === "") {
        resultado.innerText=`Preencha todas as informaçoes`;
        return;
    }

    let populacaoA = Number(populacaoAinput); // let para variavel que modifica os valores
    let populacaoB = Number(populacaoBinput);

    const taxaA = Number(taxaAinput) / 100;  // const para variavel que nao modifica valores
    const taxaB = Number(taxaBinput) / 100;


    if(isNaN(populacaoA) || isNaN(populacaoB) || isNaN(taxaA) || isNaN(taxaB)){ // verifica se e numero
        resultado.innerText=`Insira apenas numero`;
        return;  // Você usa return false em algumas validações e apenas return em outras. 
                // Como a função não precisa retornar um valor, use apenas return; em todos os casos para manter o padrão.
    }else if(populacaoA > populacaoB){  // vaerifica se a população de A é maior que B
        resultado.innerText=`População A ja é maior que população B`
        return;
    }else if(populacaoA <= 0 || populacaoB <=0){  // verifica se a população e maior que zero
        resultado.innerText=`População nao pode ser negativa`
        return;
    }else {
        while (populacaoA <= populacaoB && anos < max_anos){  // o laço verifica se A e maior que B, e se o ano é menor que mil
            populacaoA += populacaoA * taxaA;
            populacaoB += populacaoB * taxaB;
            anos++;
        }
    }
    if (anos === max_anos){
        resultado.innerText=`os anos ja passaram do limite`;
        return;
    }
    
    resultado.innerHTML=`População A: ${Math.round(populacaoA)} habitantes.
    <br> População B: ${Math.round(populacaoB)} habitantes. 
    <br> Se passaram: ${anos} anos `
    
}
// #endregion

// #region programa que imprime na tela os números de 1 a 20  COMENTADO
    /*
    Faça um programa que imprima na tela os números de 1 a 20, um abaixo do outro. 
    Depois modifique o programa para que ele mostre os números um ao lado do outro.
    */
/*
   // Programa 1
for(let n=1; n<=20; n++){
    console.log(n)
}


// Programa 2
let num = []  // uma lista vasia pra receber os numeros
let linha = ''  // uma string vasia pra receber os numeros
for(let n=1; n<=20; n++){
    num.push(n) // push adiciona cada valor do loop na lista
    linha += n + ' '
}
// dois resultados um feito com string e outro usando listas(ARRAY)  
console.log(num.join(' ')) //ara a exibição lado a lado, join(" ") cria uma string com os números separados por espaço.
console.log(linha)
*/
// #endregion

// #region informar o maior numero  
/*
Faça um programa que leia 5 números e informe o maior número.
*/
function verificarnumnero(){
    const numero1Input = document.querySelector("#n1").value;
    const numero2Input = document.querySelector("#n2").value;
    const numero3Input = document.querySelector("#n3").value;
    const numero4Input = document.querySelector("#n4").value;
    const numero5Input = document.querySelector("#n5").value;
    const resultado = document.querySelector("#resultadonum");
    
    const numero1 = Number(numero1Input);
    const numero2 = Number(numero2Input);
    const numero3 = Number(numero3Input);
    const numero4 = Number(numero4Input);
    const numero5 = Number(numero5Input);

    resultado.innerText=`Aqui esta o seu resultado: ${Math.max(numero1,numero2,numero3,numero4,numero5)}`;
}

// #endregion

// #region Leia 5 números e informe a soma e a média dos números
/*
Faça um programa que leia 5 números e informe a soma e a média dos números.
*/
/*
let veses = 5  //veses que o loop e executado
let soma = 0 //variavel com a soma dos valores

for (let n1=1; n1<=veses; n1++) { 
    let nun = parseFloat(prompt(`Digite o numero:`)) //variavel que pede pro usuario digitar um numero
    soma += nun //soma o valor da variavel a num com a variavel soma
// ou seja se o usuario digitar 1,3,8,2,7 a variavel vai somar e gravar o resultado na variavel soma
}
let media = soma / veses //divide o valor de soma por veses

alert(`"Soma:", ${soma}`);
alert(`"Média:", ${media}`);
*/
// #endregion

// #region imprima na tela apenas os números ímpares entre 1 e 50  COMENTADO
/*
Faça um programa que imprima na tela apenas os números ímpares entre 1 e 50.
*/
/*
for (let n=1; n<=50; n=n+2){
    console.log(n)

}
*/
// #endregion 

// #region Altere o programa anterior para mostrar no final a soma dos números  COMENTADO

//Altere o programa anterior para mostrar no final a soma dos números.
/*
let n1=0
for (let n=1; n<=50; n=n+2){
    n1 += n
    console.log(n)
}
console.log("A soma dos números é:", n1);
*/
//#endregion

// #region Tabuada  COMENTADO
/*
Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro 
entre 1 a 10. 
O usuário deve informar de qual numero ele deseja ver a tabuada. 
A saída deve ser conforme o exemplo abaixo:
Tabuada de 5:
5 X 1 = 5
5 X 2 = 10
...
*/
/*
const n1 = 5
console.log(`Tabuada do: ${n1}`)
for (let n=1; n<=10; n++){
    console.log(`${n1} X ${n} = ${n1*n}`)
}
*/
// #endregion

// #region base, expoente e calcule  COMENTADO
/*
Faça um programa que peça dois números, base e expoente, calcule e 
mostre o primeiro número elevado ao segundo número. 
Não utilize a função de potência da linguagem. 
*/
/*
const base = 2;
const expo = 3;
const funcaoMath= Math.pow(base, expo);  //exemplo usando a função Math da linguagem
console.log(base**expo);
console.log(funcaoMath);
*/
// #endregion

// #region numeros pares e impares COMENTADO
/*
Faça um programa que peça 10 números inteiros, 
calcule e mostre a quantidade de números pares 
e a quantidade de números ímpares.
*/
/*

let par = 0;
let impar = 0;
for (let i=1; i<= 10;i++){
    let numero = prompt();
    let num  = parseInt(numero, 10); // base 10 garante decimal

    if(isNaN(num)){
        alert('nao é um numero');
        i--;  // repete esta posição
        continue;
    }else if (num % 2 == 0){
        par ++;
    }else{
        impar++;
    }
}
alert(`numeros par: ${par}`);
alert(`numeros impar: ${impar}`);
*/




// #endregion

//#region sequencia fibonacci com n-ésimo termo  COMENTADO
/*
A série de Fibonacci é formada pela sequência 1,1,2,3,5,8,13,21,34,55,... 
Faça um programa capaz de gerar a série até o n−ésimo termo.
Sequência de Fibonacci com laços
*/
/*
function seq(num) {
    let array = [0,1];  //array pra receber a sequencia com 0 e 1 ja inseridos
    for (let i = 2; i < num; i++){
        let somafibo =  array [ i -1 ] + array [i - 2]; 
        array.push(somafibo);
    }
    return array.slice(0,num);  // Garante o tamanho correto
}
console.log(seq(10));
*/

//#endregion

//#region sequencia fibonacci com valor acima de 500  COMENTADO
/*
A série de Fibonacci é formada pela sequência 0,1,1,2,3,5,8,13,21,34,55,... 
Faça um programa que gere a série até que o valor seja maior que 500.
*/
/*
function fibo(n){
    let a = 0
    let b = 1
    let resultado = []

    while (a<= n){
        resultado.push(a); //Adiciona o valor atual de a (que é um número de Fibonacci) ao array resultado.
        let proximo = a + b; //Calcula o próximo número da sequência somando a (atual) e b (próximo da sequência).
        a = b; //Atualiza a para ser o valor que antes era b (avançamos um passo).
        b = proximo; //Atualiza b para ser o próximo número recém-calculado.
    }
    return resultado;
}
console.log(fibo(8))
*/

//#endregion

//#region fatorial de um numero intero COMENTADO
/*
Faça um programa que calcule o fatorial de um número inteiro fornecido pelo usuário. 
Ex.: 5!=5.4.3.2.1=120
*/
// METODO 1
// aqui ta sendo feito o fatorial crescente colocando os valores dentro do array(lista)

/*
let n1 = 6;
let n2 = 1;
let array = [];
for(let i=1; i<= n1; i++){
    //n2 *= i;
    array.push(n2 *=i); 
}
console.log(array);
*/

// METODO 2
// aqui ta sendo feito o fatorial decrescente com funçao
/*
function fatdescrescente(n){
    let n1 = 1;
    let array = [];
    for (let i=n;i >1;i--){
        n1 *= i;
        array.push(n1);
    }
    return array;
}
console.log(fatdescrescente(6));
*/


//#endregion

//#region menor valor, maior valor e soma dos valores COMENTADO
/*
Faça um programa que, dado um conjunto de N números, 
determine o menor valor, o maior valor e a soma dos valores.
*/
// METODO 1
/*
let nume1 = 5
let nume2 = 9
let nume3 = 7

let resulmax = Math.max(nume1,nume2,nume3)
let resulmin = Math.min(nume1,nume2,nume3)
let soma = nume1+nume2+nume3

console.log(soma)
console.log(resulmax)
console.log(resulmin)
*/

// METODO 2
/*
let listanum = []; //lista vasia
for (let i=0; i < 5; i++){ // repete o laço 5 vezes 
    let entra = prompt(`digite aqui o ${i+1} numero`); //recebeo numero inserido no pronpt
    let entranum = Number(entra); //coloca os numreros do prompt nessa variavel e transforma em nunero
    listanum.push(entranum); //adiciona os numnero na lista

} //fim do loop

// REDUCE soma os valores do array
const somar = listanum.reduce((a, b) => a + b, 0); //soma dos numeros

const numeromax = listanum.reduce((a, b) => Math.max(a, b));  //pode ser feito com reduce
const numeromin = Math.min(...listanum); //pode ser feito com spread que seria os 3 pontos

alert(`soma dos numeros: ${somar}`);
alert(`resultado com maior numero: ${numeromax}`);
alert(`resultado com menor numero: ${numeromin}`);
*/

//#endregion

//#region menor valor, maior valor e soma dos valores de 0 até 1000 COMENTADO
/*
Altere o programa anterior para que ele aceite apenas números entre 0 e 1000.
*/
/*
let listaNumeros = []
for (let i=1; i<=5; i++){
    let entrada;
    let convertEmNumero;
    do{
        entrada = prompt(`${i} Tentativa. Digite aqui um numero: `);
        convertEmNumero = Number(entrada);
        if (convertEmNumero > 1000){
            alert(`numero ultrapassou 1000!.`)
        }
    }while(isNaN(convertEmNumero) || entrada === " "|| entrada.trim().length === 0|| convertEmNumero > 1000);
    listaNumeros.push(convertEmNumero);
} //fim do loop

// REDUCE soma os valores do array
const somar = listaNumeros.reduce((a, b) => a + b, 0); //soma dos numeros

const numeromax = listaNumeros.reduce((a, b) => Math.max(a, b));  //pode ser feito com reduce
const numeromin = Math.min(...listaNumeros); //pode ser feito com spread que seria os 3 pontos

alert(`Soma dos Numeros: ${somar}`);
alert(`Resultado com maior numero: ${numeromax}`);
alert(`Resultado com menor numero: ${numeromin}`);
alert(`Numeros Inseridos: ${listaNumeros}`);
*/
//#endregion

//#region o usuário pode calcular o fatorial várias vezes limitado a 16 COMENTADO
/*
Altere o programa de cálculo do fatorial, 
permitindo ao usuário calcular o fatorial várias vezes 
e limitando o fatorial a números inteiros positivos e menores que 16.

AQUI ELE TA PEDINDO PRA LIMITAR O FATORIAL NO DECIMO QUINTO LUGAR 
ENTAO ELE FAZ O CSLCULO FATORIAL ATÉ NO MAXIMO 15 VESES QUE SERIA O NUMERO: 1307674368000
*/

/*
while(true){ //aqui temos um laço que repete sempre mass e parado prelo break do if caso entre no if
    let limite = prompt(`digite aqui o numero: `);
    if (limite === null || limite.toLowerCase() === 'sair'){
        alert(`programa encerrado!`);
        break;  //para o loop
    }

    let limiteNum=Number(limite);
    if(!Number.isInteger(limiteNum) || limiteNum < 1 || limiteNum >15){
        alert(`Insira um numero interio valido!`);
        continue;  //continue pula o resto do codigo 
        // ai o loop chama novamente
    }

    let fatorial = 1;
    for (let i=2; i<=limiteNum; i++){
    fatorial *= i;
    }
    alert(fatorial);
}
*/


//#endregion

//#region 
/*
Faça um programa que peça um número inteiro e determine se ele é ou não um número primo. 
Um número primo é aquele que é divisível somente por ele mesmo e por 1.
*/
/*
function numPrimo(numero){
    if (numero <= 1) return false;
    if (numero === 2) return true;
    
    for(let i = 2;i <= Math.sqrt(numero); i++){
        if(numero % i === 0)
            return false;
    }
    return lista;
}
let numero = 17
if(numPrimo(numero)){
    console.log(numero + ' é primo');
}else{
    console.log(numero + ' nao é primo');
}

*/

/*Vou te mostrar o que acontece dentro do computador quando ele lê esse código com numero = 7:

O computador vê a palavra function e guarda a receita da função na memória, mas não executa ela ainda.

Chega em let numero = 7;. Ele guarda o 7 na memória.

Chega em if (numPrimo(numero)). Ele precisa do resultado, então ele entra na função.

Dentro da função, numero agora vale 7.

if (7 <= 1)? Falso. Pula.

if (7 === 2)? Falso. Pula.

Entra no for:

let i = 2. 2 <= Math.sqrt(7)? Math.sqrt(7) é ~2.64. 2 é menor que 2.64? Sim.

if (7 % 2 === 0)? 7 % 2 é 1. 1 === 0? Falso. Não entra no return.

Volta para o for: i++ faz o i virar 3.

3 <= Math.sqrt(7)? 3 é menor ou igual a 2.64? Não. O laço termina.

Saiu do laço sem achar nada. Chega no return true;. 
A função devolve true para quem chamou.

Volta para o if (ehPrimo(7)). Agora o JavaScript enxerga if (true).

Como é true, entra no primeiro console.log, imprimindo "7 é primo".
*/

/*Resumo Gráfico do Fluxo
text
Chamou ehPrimo(7)
    │
    ├─ 7 <= 1? ──── Não ──► Pula
    │
    ├─ 7 === 2? ─── Não ──► Pula
    │
    ├─ Laço FOR: i = 2 até raiz(7) ≈ 2.64
    │      │
    │      ├─ 7 % 2 == 0? ── Não ──► Continua
    │      │
    │      └─ i = 3. 3 <= 2.64? ── Não ──► Sai do laço
    │
    └─ Retorna TRUE ───────► Imprime "7 é primo"

*/
//#endregion

//#region 
/*
Altere o programa de cálculo dos números primos, 
informando, caso o número não seja primo, 
por quais número ele é divisível.
*/












//#endregion

//#region 
/*
Faça um programa que calcule o mostre a média aritmética de N notas.
*/
let n = prompt(`numero: `)
let lista = []
for(let i=0; i<n; i++){
    let numero = prompt(`digite aqui seu numero: `)
    let listanumero = Number(numero);
    lista.push(listanumero);

}
const numeromax = lista.reduce((a, b) => Math.max(a, b));  //pode ser feito com reduce

console.log(numeromax)

/*

let soma = 0
let divisao 
let veses = 3
let notas = 0
let n = 0
for (i=0; i<=n; i++){
    while(true){
    n = prompt(`digite seu numero aqui`)
    notas = prompt(`digite aqui sua nota : `)
    veses =veses +i
    let notass = notass+ notas
    divisao = Math.floor(notas /n)
    console.log(notas)
    console.log(divisao)
    }
}

let ssoma = notass + notass
console.log(ssoma)
*/
//console.log(soma)
//console.log(divisao)

//let nota = 7
//console.log(mediaAritrimetrica())
/*
let nota1 = 7
let nota2 = 8
let nota3 = 10
let soma = nota1 + nota2 + nota3
let divisao = Math.floor(soma /3)
*/
//console.log(divisao)





//#endregion