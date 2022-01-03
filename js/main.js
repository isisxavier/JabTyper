var frase = $(".frase").text();
var numPalavras = frase.split(" ").length;
console.log(numPalavras);

var tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(numPalavras);

var tempoJogo = $("#tempo");
var tempoInicial = tempoJogo.text();

var campo = $("#campo-digitacao");
campo.on("input", function () {
    var frase = campo.val();
    var nCaracteresDigitados = frase.length;
    $("#caracteres-digitados").text(nCaracteresDigitados);

    var nPalavrasDigitadas = frase.split(" ").length;
    $("#palavras-digitadas").text(nPalavrasDigitadas);


});



campo.on("focus", function () {
    var cronometro = setInterval(function () {
        var tempoRestante = tempoJogo.text();
        if (tempoRestante <= 0) {
            campo.attr("disabled", true);
            clearInterval(cronometro);

            nome = $("#nome").val()
            palavrasDigitadas = $("#palavras-digitadas").text()
            pontuacao = palavrasDigitadas/tempoInicial * 60
            $('#tabela-resultado').append('<tr><td>'+nome+'</td><td>'+pontuacao+'</td><tr>');
        } else {
            tempoRestante--;
            tempoJogo.text(tempoRestante);
        }

    }, 1000);
});

$("#botao-reiniciar").on("click", function () {
    campo.attr("disabled", false);
    campo.val("");
    $("#caracteres-digitados").text("0");
    $("#palavras-digitadas").text("0");
    $("#tempo").text(tempoInicial);
});