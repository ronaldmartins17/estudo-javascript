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
    const usuario = usuarioInput.value.trim;
    const senhaInput = document.querySelector("#senha");
    const senha = senhaInput.value;
    const resultadoUsuarioSenha = document.querySelector("#resultadoUsuarioSenha");          

    if (usuario === '' && senha === '') {
        resultadoUsuarioSenha.innerText = "Por favor, preencha todos os campos.";
        resultadoUsuarioSenha.style.color = 'orange';
        return false;
    }else if (senha === usuario){
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
//

// #endregion