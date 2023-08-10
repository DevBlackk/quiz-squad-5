function iniciar() {
    var nome
    do {
        nome = prompt("Digite o seu nome.");
        if(nome.length <= 3) {
            alert("O nome digitado tem que ter mais que 3 caracteres.");
        }
    } while(nome.length <= 3);
    nome = nome[0].toUpperCase() + nome.substring(1);
    window.location.href = "page1.html"
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
    if(prompt("insira a resposta da pergunta 2") =="c") {
        alert("Voce acertou")
        window.location.href ="page3.html"
    } else {
        alert("Tente novamente")
        window.location.href ="index.html"
    }
    }

function terceira () {
    if(prompt("insira a resposta da pergunta 3") =="d") {
        alert("Voce acertou")
        window.location.href ="page4.html"
    } else {
        alert("Tente novamente")
        window.location.href ="index.html"
    }
    }


function quarta () {
    if(prompt("insira a resposta da pergunta 4") =="b") {
        alert("Voce acertou")
        window.location.href ="page5.html"
    } else {
        alert("Tente novamente")
        window.location.href ="index.html"
    }
    }

    function quinta () {
        if(prompt("insira a resposta da pergunta 5") == "b") {
            alert("Voce acertou")
            window.location.href = "final.html"
        } else {
            alert("Tente novamente")
        }
        }
