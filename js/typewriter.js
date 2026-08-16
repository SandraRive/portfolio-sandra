const texto = '> Aprendiendo a construir aplicaciones Android y web con JavaScript, SQL y buenas prácticas de desarrollo.';
const elemento = document.getElementById('typewriter-text');
let indice = 0;

function escribir() {
  if (indice < texto.length) {
    elemento.textContent += texto.charAt(indice);
    indice++;
    setTimeout(escribir, 35);
  }
}

escribir();