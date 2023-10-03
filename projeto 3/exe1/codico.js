function calcularHorasExtras() {
    const salario = parseFloat(document.getElementById('salario').value);
    const horasNormais = parseFloat(document.getElementById('horasNormais').value);
    const horasFinaisDeSemana = parseFloat(document.getElementById('horasFinaisDeSemana').value);

    var valorDaHora = salario / 200;
    var valorHorasNormais = valorDaHora * horasNormais;
    var valorHorasFinaisDeSemana = (valorDaHora * horasFinaisDeSemana) * 1.5; // Acréscimo de 50%

    var valorTotal = valorHorasNormais + valorHorasFinaisDeSemana;

    var resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `Valor a Receber: R$ ${valorTotal.toFixed(2)}`;
}