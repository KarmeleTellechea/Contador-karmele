  let contador = 0;

  const botonIncrementar = document.getElementById('incrementar');
  const botonDecrementar = document.getElementById('decrementra');
  const valorContador = document.getElementById('valor');
 
  function incrmentalo(){
    contador++;
    valorContador.textContent = contador;
   }

function decrementra(){
  
    if (contador > 0 ){
        contador--;
        valorContador.textContent = contador;
    } 
    else ( contador < 0 ){

    }
}


  botonIncrementar.addEventListener('click', () => {
      
  });
  
  botonDecrementar.addEventListener('click', () => {
      
  });