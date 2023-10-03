function CalcularGorjeta(){
    var gorjeta = Number(document.getElementById('gorjeta').value)
    var total = 0
    //alert("Bom: "+document.getElementById("bom").checked)
    //alert("regular: "+document.getElementById("regular").checked)
    //alert("ruim: "+document.getElementById("ruim").checked)
    if (document.getElementById("bom").checked == true) {
        total = 0.2
    }
    else if (document.getElementById("regular").checked == true ) {
        total = 0.1
    }
    else{
        total = 0.05
    }
    var totalGorjeta = gorjeta * total

    var resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `Valor da Gorjeta: R$ ${totalGorjeta.toFixed(2)}`;
}
