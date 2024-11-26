let boton=document.getElementById("boton");

boton.addEventListener(
    "click",function(event){
        event.preventDefault();

let nuevoid=document.createElement("div");
    nuevoid.innerHTML="divCreado";
    nuevoid.classList.add("borde");

let resultadoDiv=document.getElementById("resultadoDiv");
    resultadoDiv.appendChild(nuevoid);

    }
);




