var n1 = document.getElementById("n1")
var n2 = document.getElementById("n2")
var res = document.getElementById("res")
function soma(){
    res.innerHTML += `<p style="color:white">O resultado da soma é: ${Number(n1.value)+Number(n2.value)}</p>`
}
function sub(){
    res.innerHTML += `<p style="color:white">O resultado da subtração é: ${Number(n1.value)-Number(n2.value)}</p>`
}
function mult(){
    res.innerHTML += `<p style="color:white">O resultado da multiplicação é: ${Number(n1.value)*Number(n2.value)}</p>`
}
function div(){
    if(n2.value==0){
        res.innerText += " Não existe divisão por 0 "
    }
    else {
        res.innerHTML += `<p style="color:white">O resultado da divisão é: ${Number(n1.value)/Number(n2.value)}</p>` 
    }
}
function limpar(){
    res.innerText = '';
    n1.value = '';
    n2.value = '';
}
function pot(){
    res.innerHTML += `<p style="color:white">O resultado da potência é: ${Number(n1.value)**Number(n2.value)}</p>`
}
function raiz(){
    res.innerHTML += `<p style="color:white">O resultado da raiz é: ${Number(n1.value)**0.5}</p>`
}