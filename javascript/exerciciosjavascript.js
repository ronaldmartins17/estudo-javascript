// #region validar nota 
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

// #region verificar informaçoes
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

// #region calculo populacional
    /*
    Supondo que a população de um país A seja da ordem de 80000 habitantes 
    com uma taxa anual de crescimento de 3% e que a população de B seja 200000 habitantes 
    com uma taxa de crescimento de 1.5%. 
    Faça um programa que calcule e escreva o número de anos necessários para que a população do país 
    A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.
    */

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

// #region programa que imprime na tela os números de 1 a 20
    /*
    Faça um programa que imprima na tela os números de 1 a 20, um abaixo do outro. 
    Depois modifique o programa para que ele mostre os números um ao lado do outro.
    */

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

// #endregion






