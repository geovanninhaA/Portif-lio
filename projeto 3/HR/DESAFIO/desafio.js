var n1 = document.getElementById("n1")
var n2 = document.getElementById("n2")
var res = document.getElementById("res")




function soma(){
    res.innerHTML +=`<p style="color:white"> O resultado da soma é ${Number(n1.value) + Number(n2.value)}</p>`  
    guardarResultado(resultados)
}
function sub(){
    res.innerHTML +=`<p style="color:white"> O resultado da soma é ${Number(n1.value) - Number(n2.value)}</p>` 
    guardarResultado()

}
function multi(){
    res.innerHTML +=`<p style="color:white"> O resultado da soma é ${Number(n1.value) * Number(n2.value)}</p>`
    guardarResultado()
      
}
function div(){
    if(n2.value==0){
        res.innerHTML +=`<p style="color:white"> não é possível dividir o número 0!</p>`  
    }else{
        res.innerHTML +=`<p style="color:white"> O resultado da soma é ${Number(n1.value) / Number(n2.value)}</p>`  
    }
}
function limpar(){
    res.innerHTML = ''  
}
