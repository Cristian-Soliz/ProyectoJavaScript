function suma(){
    let valor1=document.getElementById("numero").value;
    let valor2=document.getElementById("numerodos").value;
    let verificar=document.getElementById("verificar");
    let resultado=document.getElementById("resultado");
    let resultadosuma=parseFloat(valor1)+parseFloat(valor2);

    if(valor1=="" || valor2==""){
        alert("debes escribir un número")
    }
    else{
        resultado.innerHTML="el resultado es:" + resultadosuma;
    }
  
}