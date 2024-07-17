function encriptar(){
    let textoEncriptar = document.querySelector("textarea").value;
    let textoEncriptado = document.getElementById("muñeco");
    let mostrar = document.getElementById("div-right");
    textoEncriptado.style.display = 'none';
    
    mostrar.innerHTML = (textoEncriptar);
}


/*textoEncriptar.innerHTML = ("Hora del desafio");*/

