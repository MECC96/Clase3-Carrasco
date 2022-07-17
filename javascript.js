alert(`Bienvenido al concatenador de palabras! 
Acá podrás crear tu propia historia!`);
let historia = "";
let palabra = prompt(`Por favor, ingresar una palabra o frase.
Para salir y ver tu historia, escribir "ESC".`);

do {
    historia += palabra + " ";
    palabra = prompt(`Por favor, ingresar una palabra o frase.
Para salir y ver tu historia, escribir "ESC".`);
}while (palabra!= "ESC" && palabra!= "Esc" && palabra!= "esc")

alert(historia);