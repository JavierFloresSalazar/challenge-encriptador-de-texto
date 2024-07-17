function encriptar(){
    let textoEncriptar = document.querySelector("textarea").value;
    
    if(textoEncriptar.trim() !== ""){
        let nuevoMensaje = textoEncriptar.replace(/e/g,"enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat");
        let mostrar = document.getElementById("div-right");

        mostrar.style.paddingLeft = "20px";
        mostrar.innerHTML = nuevoMensaje;
    }else{
        alert("Por favor escribe algo en el area del texto");
    }
}

function desencriptar(){
    let textoEncriptar = document.querySelector("textarea").value;
    
    if(textoEncriptar.trim() !== ""){
        let nuevoMensaje = textoEncriptar.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u");
        let mostrar = document.getElementById("div-right");

        mostrar.style.paddingLeft = "20px";
        mostrar.innerHTML = nuevoMensaje;
    }else{
        alert("Por favor escribe algo en el area del texto");
    }
}