function encriptar(){
    let textoEncriptar = document.querySelector("textarea").value;
    let mostrar = document.getElementById("div-right");
    let copiar = document.getElementById("copiar");
    let imagen = document.getElementById("muñeco");
    var soloMinusculas = /^[a-z\s]*$/.test(textoEncriptar);

    if(!soloMinusculas){
        alert("solo debes ingresar minusculas sin acentos");
        mostrar.innerHTML = '<img src="images/Muñeco.png" alt="Descripción de la imagen">' +  
        '<p id="mensaje-negritas">Ningun mensaje fue encontrado</p>' + 
        '<p id="mensaje">Ingresa el mensaje que deseas encriptar o desencriptar</p>';
    } else if(textoEncriptar.trim() !== ""){
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
    let copiar = document.getElementById("copiar");
    let imagen = document.getElementById("muñeco");
    var soloMinusculas = /^[a-z\s]*$/.test(textoEncriptar);
    
    if(!soloMinusculas){
        alert("solo debes ingresar minusculas sin acentos");
        mostrar.innerHTML = '<img src="images/Muñeco.png" alt="Descripción de la imagen">' +  
        '<p id="mensaje-negritas">Ningun mensaje fue encontrado</p>' + 
        '<p id="mensaje">Ingresa el mensaje que deseas encriptar o desencriptar</p>';
    } else if(textoEncriptar.trim() !== ""){
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

async function buttonCopiar() {
    var div = document.getElementById("div-right");
    var texto = div.textContent;
    try {
        await navigator.clipboard.writeText(texto);
        var toast = document.getElementById("toast");
        toast.className = "toast show";
        setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
    } catch (err) {
        alert("Error al copiar el texto");
    }

    
}