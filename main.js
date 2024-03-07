// valor inicial : 0  nombre variable contar y el valor 0 ( variable let por que el resultado 
//tendra cambios )
let contar=0;
//seleccion de valor y botones :
// variable constante selecionamos el clas value 
const value = document.querySelector("#value")
//variable constante para selecionar botones:
const botones = document.querySelector(".btn")
// funcion de boton : 

botones.forEach(function (btn) {
    
    btn.addEventListener("click", function (e) {
      const styles = e.currentTarget.classList;
//si en estinlos.contains disminuir contador a menos(--)
      if (styles.contains("disminuir")) {
        contar--;
      } 
// sino y si en el styles aumentar contador mas
      else if (styles.contains("aumentar")) {
        contar++;
      } 
      else {
        contar = 0;
      }
  
     /* if (count > 0) {
        value.style.color = "green";
      }
      if (count < 0) {
        value.style.color = "red";
      }
      if (count === 0) {
        value.style.color = "#222";
      }*/
      value.textContent = count;
    });
  });