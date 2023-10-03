var n1 = document.getElementById("n1")
var n2 = document.getElementById("n2")
var n2 = document.getElementById("n3")
var res = document.getElementById("cal")

function cal(){
    res.innerHTML +=`<p style="color:white"> O resultado da soma é ${Number(horasTrabalhadas.value) + Number(horasTrabalhadas + horaExtra)}</p>`   
    
    horasTrabalhadas()
        res.innerHTML +=`<p style="color:white"> O resultado da soma é ${(Number(n1.value)  /200) *Number(n2.value)}</p>`  
    
    horaExtra()
            res.innerHTML +=`<p style="color:white"> O resultado da soma é ${Number(n3.value) * 1.5}</p>` 
        
    limpar()
            res.innerHTML = ''  
        
}





