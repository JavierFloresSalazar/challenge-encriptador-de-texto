function encriptar(){
    let textoEncriptar = document.querySelector("textarea").value;
    let mostrar = document.getElementById("div-right");
    let regresar = document.getElementById("div-principal-mensaje");
    let copiar = document.getElementById("copiar");
    let imagen = document.getElementById("muñeco");
    
    if(textoEncriptar.trim() !== ""){
        let nuevoMensaje = textoEncriptar.replace(/e/g,"enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat");

        mostrar.style.paddingLeft = "2px";
        mostrar.textContent = nuevoMensaje;

        copiar.style.display = "";
        imagen.style.display = "none";

    }else{
        alert("Por favor escribe algo en el area del texto");
        mostrar.innerHTML = '<img src="images/Muñeco.png" alt="Descripción de la imagen">' +  
        '<p id="mensaje-negritas">Ningun mensaje fue encontrado</p>' + 
        '<p id="mensaje">Ingresa el mensaje que deseas encriptar o desencriptar</p>';
        copiar.style.display = "none";
        imagen.style.display = "block";
    }
}

function desencriptar(){
    let textoEncriptar = document.querySelector("textarea").value;
    let mostrar = document.getElementById("div-right");
    let regresar = document.getElementById("div-principal-mensaje");
    let copiar = document.getElementById("copiar");
    let imagen = document.getElementById("muñeco");
    
    if(textoEncriptar.trim() !== ""){
        let nuevoMensaje = textoEncriptar.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u");
        let mostrar = document.getElementById("div-right");

        mostrar.style.paddingLeft = "2px";
        mostrar.innerHTML = nuevoMensaje;

        copiar.style.display = "";
        imagen.style.display = "none";

    }else{
        alert("Por favor escribe algo en el area del texto");
        mostrar.innerHTML = '<img src="images/Muñeco.png" alt="Descripción de la imagen">' +  
        '<p id="mensaje-negritas">Ningun mensaje fue encontrado</p>' + 
        '<p id="mensaje">Ingresa el mensaje que deseas encriptar o desencriptar</p>';
        copiar.style.display = "none";
        imagen.style.display = "block";
    }
}