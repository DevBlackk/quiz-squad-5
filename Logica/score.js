var acerto = 0;
var a = "Guido van Rossum";
var b = "James Gosling";
var c = "Elon Musk";
var d = "Gustavo Guanabara";
var nome = prompt("Digite seu nome: ")

function resposta1() {
    var perguntaUm = document.getElementById("resposta");
    if (perguntaUm.value !== a) {
        alert("Tente Novamente");
    } else {
        alert("Você acertou");
        acerto++; 
        let score = document.getElementById("score");
        score.textContent = acerto + "x";
    }
}
