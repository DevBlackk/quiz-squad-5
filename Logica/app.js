
var acerto = 0;
var nome;

function iniciar() {
    var nome = prompt("Digite um nome");
    var charset = nome.toString();
    while(charset.length < 3) {
        alert("Nome invalido estamos esperando um nome com mais de 3 caracteres");
        nome = prompt("Digite o nome novamente."); 
    }
    if (charset.length > 3) {
        window.location.href ="page1.html"
    }
}


function primeira () {
    if(prompt("insira a resposta da pergunta 1") =="a") {
        alert("Voce acertou")
        window.location.href ="page2.html"
    } else {
        alert("Tente novamente")
        window.location.href ="index.html"
    }
}



function segunda () {
    if(prompt("insira a resposta da pergunta 1") =="c") {
        alert("Voce acertou")
        window.location.href ="page3.html"
    } else {
        alert("Tente novamente")
        window.location.href ="index.html"
    }
    }

function terceira () {
    if(prompt("insira a resposta da pergunta 1") =="d") {
        alert("Voce acertou")
        window.location.href ="page4.html"
    } else {
        alert("Tente novamente")
        window.location.href ="index.html"
    }
    }


function quarta () {
    if(prompt("insira a resposta da pergunta 1") =="b") {
        alert("Voce acertou")
        window.location.href ="page5.html"
    } else {
        alert("Tente novamente")
        window.location.href ="index.html"
    }
    }

    function quinta () {
        if(prompt("insira a resposta da pergunta 1") =="b") {
            alert("Voce acertou")
        } else {
            alert("Tente novamente")
        }
        }
