  let contador = 0;
  const valorcontador = document.getElementById('valor');

  function incrmentalo(){
    console.log("esto es rojo")
    contador++;
    valorcontador.textContent = contador;
   }
  function decrementra(){
  
        if (contador > 0 ){
            contador--;
            valorcontador.textContent = contador;
        } 
    }

  const botonincrementar = document.getElementById('incrementar');
  const botondecrementar = document.getElementById('decrementra');
  
  botonincrementar.onclick = console.log("estoy cliqueando")
  
  botondecrementar.onclick = console.log("estoy cliqueando")