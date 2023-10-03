function transporte(){

    var pessoas = parseFloat(document.getElementById('pessoas').value)
    var total = 0
    if (pessoas < 49) {
        total = 4.50
    }
    else if (pessoas < 99) {
        total = 4.10
    }
    else if (pessoas < 149) {
        total = 3.80
    }
    else{
        total = 3.60
    }
    var totalTransporte = pessoas * total

    var resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `Valor do transporte: R$ ${totalTransporte.toFixed(2)}`;
}

