  let contador = 0;

  const botonIncrementar = document.getElementById('incrementar');
  const botonDecrementar = document.getElementById('decrementra');
  const valorContador = document.getElementById('valor');
  
  botonIncrementar.addEventListener('click', () => {
      contador++;
      valorContador.textContent = contador;
  });
  
  botonDecrementar.addEventListener('click', () => {
      if (contador > 0) {
          contador--;
          valorContador.textContent = contador;
      }
  });