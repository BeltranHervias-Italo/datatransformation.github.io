    function pegarYTransformar() {
        navigator.clipboard.readText()
          .then((text) => {
            const inputDatos = document.getElementById('inputDatos');
            inputDatos.value = text;
            
            transformarDatos();
          })
          .catch((error) => {
            console.error('Error al leer el portapapeles:', error);
          });
      }
      
      function transformarDatos() {
        const inputDatos = document.getElementById('inputDatos');
        const outputDatos = document.getElementById('outputDatos');
      
        const datosOriginales = inputDatos.value;
      
        const lineas = datosOriginales.split('\n');
        const resultado = [];
      
        for (let i = 0; i < lineas.length; i++) {
          const linea = lineas[i].trim();
          if (linea !== '') {
            const inicio = linea.indexOf('image-');
            const fin = linea.indexOf('.png') + 4;
            const nombreImagen = linea.substring(inicio, fin);
            const resultadoLinea = `[[Image(${nombreImagen})]]`;
            resultado.push(resultadoLinea);
          }
        }
      
        outputDatos.value = resultado.join('\n');
      }
      


      // Función para copiar el resultado al portapapeles
  function copiarResultado() {
    const outputDatos = document.getElementById('outputDatos');
    
    outputDatos.select();
    document.execCommand('copy');
  }
  
  function refresh() {
    document.getElementById('inputDatos').value = '';
    document.getElementById('outputDatos').value = '';
  }


  // Función para alternar el modo oscuro
  function toggleDarkMode() {
    const body = document.body;
    
    if (body.classList.contains('dark-mode')) {
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
    } else {
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');
    }
  }