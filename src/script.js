(function(){
    'use strict'; 

    //relacionar os elementos HTML com variáveis
    var $msgTextarea  = document.getElementById('js-textarea');
    var $caracteresContainer = document.getElementById('js-caracteres_container');
    var $caracteresRestantes = document.getElementById('js-caracteres_restantes')
    var $mostrarTotalCaracteres = document.getElementById('js-caracteres_totais')

    //variável para armazenar o maxlength (quantidade total de caracteres)
    var $maxCaracteres = $msgTextarea.maxLength;

    //criando um evento no textarea para exibir os caracteres que restam
    $msgTextarea.addEventListener('input', function(){
        var $caracteresDigitados = this.value.length;
        var $caracteresRestantes = parseInt($maxCaracteres) - parseInt($caracteresDigitados);

        mostrarCaracteresRestantes($caracteresRestantes);
    })

    //chamando as funções
    mostrarCaracteresTotais($maxCaracteres);
    mostrarCaracteresRestantes($maxCaracteres);
    mostrarEsconderContainer();

    //função para mostrar o total de caracteres (maxlength)
    function mostrarCaracteresTotais(x){
        $mostrarTotalCaracteres.textContent = x;
    }
    //função para mostrar quantos caracteres ainda faltam
    function mostrarCaracteresRestantes(x){
        $caracteresRestantes.textContent = x;
    }

    //função que irá esconder o container de caracteres caso o JS não seja carregado
    function mostrarEsconderContainer(){
        $caracteresContainer.style.display = 'block';
    }
    
})()
