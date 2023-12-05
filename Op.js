function enviarSolicitud(event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado del formulario (recarga de página)
  
    const url = 'http://localhost:1337/api/cursos';
  
    // Obtener valores del formulario
    const nombreCurso = document.getElementById('nombreCurso').value;
    const paralelo = document.getElementById('paralelo').value;
    const fechaInicio = document.getElementById('fechaInicio').value;
    const fechaFin = document.getElementById('fechaFin').value;
    const horarioInicio = document.getElementById('horarioInicio').value;
    const horarioFin = document.getElementById('horarioFin').value;
  
    const data = {
      data: {
        nombre_curso: nombreCurso,
        paralelo: paralelo,
        fecha_ini: fechaInicio,
        fecha_fin: fechaFin,
        horario_inicio: horarioInicio,
        horario_fin: horarioFin,
      }
    };
  
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'insomnia/8.4.5',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Curso registrado:', data);
      // Puedes hacer algo con la respuesta, como mostrar un mensaje de éxito
    })
    .catch(error => {
      console.error('Error al registrar el curso:', error);
      // Puedes manejar el error de alguna manera, como mostrar un mensaje de error
    });
  }
  