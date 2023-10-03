function calcularAumento() {
    var salario = parseFloat(document.getElementById('salario').value);
    
    if (salario <= 1200) {
    percentual = 1.16
    }
    else if (salario < 2100) {
        percentual = 1.13
    }
    else if (salario <3000) {
        percentual = 1.10
    }
    else{
        percentual = 1.05
    }
    var novoSalario = salario * percentual

    var resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `Valor do novo salário: R$ ${novoSalario.toFixed(2)}`;
}