  let contador = 0;
  const valorcontador = document.getElementById('valor');

  function incrmentalo(){
    
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
      console.log("vamos a resetear")
     contador = 0; 
     valorcontador.textContent=contador;

    }

  const botonincrementar = document.getElementById('incrementar');
  const botondecrementar = document.getElementById('decrementra');
  const botonresetear = document.getElementById("resetear");
   
  botonresetear.onclick = resetear

  botonincrementar.onclick = incrmentalo
  
  botondecrementar.onclick = decrementra
