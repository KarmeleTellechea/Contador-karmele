  let contador = 0;

  function incrmentalo(){
    console.log("esto es rojo")
    contador++;
    valorContador.textContent = contador;
   }
  function decrementra(){
  
        if (contador > 0 ){
            contador--;
            valorContador.textContent = contador;
        } 
    }

  const botonIncrementar = document.getElementById('incrementar');
  const botonDecrementar = document.getElementById('decrementra');
  const valorContador = document.getElementById('valor');

  botonIncrementar.onclick= console.log("estoy cliqueando")
  
  botonDecrementar.onclick= console.log("estoy cliqueando")