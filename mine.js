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
    function resetear(){

      valorcontador.textcontent= 0

    }

  const botonincrementar = document.getElementById('incrementar');
  const botondecrementar = document.getElementById('decrementra');
  const botonresetear = document.getElementById("resetear")
   console.log(botonincrementar)
  botonincrementar.onclick = incrmentalo
  
  botondecrementar.onclick = decrementra
