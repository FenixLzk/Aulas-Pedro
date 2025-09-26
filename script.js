function gerarTabuada() {
    let inputNumero = document.getElementById("numero");

    let n = Number(inputNumero.value);
    let divResultado = document.getElementById("resultado");

    if (inputNumero.value.length == 0) {
        alert("Voce Precisa digitar um numero!");
        divResultado.innerHTML = "";
        return;
    }

    let textoTabuada = "";
    for (let i = 1; i <= 10; i++) {          // isso deu uma dor de cabeça pra montar
        textoTabuada += `${n} x ${i} = ${n * i}<br>`;
    }

    // exibe resultado na div
    divResultado.innerHTML = textoTabuada;
}

