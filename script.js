function carregar () {
    var msg = document.querySelector('#msg');
    var foto = document.querySelector('#foto');
    var hora = new Date().getHours();
    var minuto= new Date().getMinutes();
    msg.innerHTML= ` Agora são: ${hora} Hora e ${minuto} Minutos`;
    document.body.style.color = 'rgba(255, 255, 255, 1)' // defini a cor como azul

    if(hora >= 6 && hora <= 12){
        // Bom Dia //
        foto.src = 'imagens/fotomanha.png';
        document.body.style.background = 'rgb(59, 242, 242)';
    }else if (hora <= 19) {
        // boa tarde //
        foto.src = 'imagens/fototarde.png';
        document.body.style.background = 'rgb(0, 184, 55)';    
    }else if (hora >= 20 && hora <= 24) {
        // boa noite //
        foto.src = 'imagens/fotonoite1.png';
        document.body.style.background = 'rgba(44, 28, 28, 1)';       
    }else if (hora <=5 && hora >=1) {
        // boa madrugada //
        document.body.style.background = 'rgb(184, 0, 114)';     
        foto.src = 'imagens/fotonoite2.png';
    }else {
        // se der erro //
        msg.innerHTML = ` Deu algum erro !!!`
        document.body.style.background = 'rgb(184, 0, 0)';
    }   
}

function carregaridade (){
    var numero = document.querySelector('#numero');
    var num = Number(numero.value);
    var sexo = document.querySelectorAll('[name="sexo"]');
    var foto = document.querySelector('#foto');
    var res = document.querySelector('#resultado');
    var ano = new Date().getFullYear(); /*pega apenas o ano atual do contrutor Date*/
    var idade = ano - num;
    
    if (!num || num< 1900 || num > ano){
        res.innerHTML = `Por Favor, digite um ano valido !`;
        return;
    }
    const genero = sexo[0].checked ? 'Masculino' : 'Feminino';
    const faixaetarias = [
        {min:1, max:12, masculino:{texto:'menino', imagem: 'imagens/menino-redondo.png'},
            feminino: {texto:'menina', imagem:'imagens/menina-redonda.png'}},

        {min:13, max:19, masculino:{texto:'homem', imagem:'imagens/adolecente-redondo.png'},
            feminino:{texto:'mulher', imagem:'imagens/adolecente-redonda.png'}},
            
        {min:20, max:55, masculino:{texto:'homem', imagem: 'imagens/homem-redondo.png' },
            feminino:{texto:'mulher', imagem:'imagens/mulher-redonda.png'} },

        {min:56, max:74, masculino:{texto:'homem', imagem:'imagens/velho-redondo.png'},
            feminino:{texto:'mulher', imagem:'imagens/velha-redonda.png'}},

        {min:75, max:90, masculino:{texto:'idoso', imagem:'imagens/velho-redondo.png'},
            feminino:{texto:'idosa', imagem:'imagens/velha-redonda.png'}},

        {min:90, max:Infinity, masculino:{texto:'ansião',imagem:'imagens/velho-redondo.png'},
            feminino:{texto:'ansiã', imagem:'imagens/velha-redonda.png'}},
    ];

    const faixa = faixaetarias.find(f => idade >= f.min && idade <= f.max);

    if (faixa) {
        const info = genero === "Masculino" ? faixa.masculino : faixa.feminino;
        const artigo = genero === "Masculino" ? 'um':'uma';
        res.innerHTML = `Você é ${artigo} ${info.texto} com ${idade} anos <br>`;
        foto.src = info.imagem;
    }else{
        res.innerHTML = `Erro insira as infomaçoes novamente !`;        
    }


/*  aqui foi feito um teste com if 
    esta funcional mas não me parece adequado

    if (idade >= 1 && idade <= 12) {
        if (genero === "Masculino") {
            res.innerHTML = `voce é um menino com ${idade} anos <br>`
            foto.src = 'imagens/menino-redondo.png';
            res.innerHTML = `Voce é do sexo ${genero}! <br> Sua idade é de ${idade} anos`
        }
    } else if (idade >= 13 && idade <= 19) {
        if (genero === "Masculino") {
            res.innerHTML = `voce é um ${genero} com ${idade} anos <br>`
            foto.src = 'imagens/adolecente-redondo.png';
        }else if(genero === "Feminino"){
            res.innerHTML = `voce é uma ${genero} com ${idade} anos <br>`
            foto.src = 'imagens/adolecente-redonda.png'
        } 
    } else if (idade >= 20 && idade <= 55) {
        if (genero === "Masculino") {
            res.innerHTML = `voce é um Homem com ${idade} anos <br>`
            foto.src = 'imagens/homem-redondo.png';
        }else {
            genero === "Feminino"
            res.innerHTML = `voce é uma Mulher com ${idade} anos <br>`
            foto.src = 'imagens/mulher-redonda.png'
        }
            res.innerHTML = `Voce é do sexo ${genero}! <br> Sua idade é de ${idade} anos`
    } else if (idade >= 56 && idade <= 74) {
        if (genero === "Masculino") {
            res.innerHTML = `voce é um Homem com ${idade} anos <br>`
            foto.src = 'imagens/velho-redondo.png';
        }else {
            genero === "Feminino"
            res.innerHTML = `voce é uma Mulher com ${idade} anos <br>`
            foto.src = 'imagens/velha-redonda.png'
            res.innerHTML = `Voce é do sexo ${genero}! <br> Sua idade é de ${idade} anos`
            }
    } else if (idade >= 75 && idade <= 90) {
        if (genero === "Masculino") {
            res.innerHTML = `voce é um menino com ${idade} anos <br>`
            foto.src = 'imagens/menino-redondo.png';
            res.innerHTML = `Voce é do sexo ${genero}! <br> Sua idade é de ${idade} anos`
        }
    } else if (idade >= 91) {
        if (genero === "Masculino") {
            res.innerHTML = `voce é um menino com ${idade} anos <br>`
            foto.src = 'imagens/menino-redondo.png';
            res.innerHTML = `Parabens voce é um ansião(a) <br> Voce é do sexo ${genero}! <br> Sua idade é de ${idade} anos`
        } else {
            res.innerHTML = 'Voce é trouxa'   
        }
    }
*/

}
