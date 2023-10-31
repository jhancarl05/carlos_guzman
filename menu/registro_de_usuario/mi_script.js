document.addEventListener('DOMContentLoaded', function() {
    // Agrega el evento de envío del formulario de registro
    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault(); // Evita el envío del formulario

        // Obtiene los valores del formulario
        var nombre = document.getElementById('nombre').value;
        var apellidoPaterno = document.getElementById('apellidoPaterno').value;
        var apellidoMaterno = document.getElementById('apellidoMaterno').value;
        var telefono = document.getElementById('telefono').value;
        var ci = document.getElementById('ci').value;
        var Direccion = document.getElementById('direccion').value;
        var Especialidad = document.getElementById('especialidad').value;
        var Correo = document.getElementById('correo').value;
        var fecha_de_registro = document.getElementById('fecha_de_registro').value;

        // Crea una nueva fila en la tabla de pacientes registrados
        var tabla = document.querySelector('.tabla-pacientes tbody');
        var fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${nombre}</td>
            <td>${apellidoPaterno}</td>
            <td>${apellidoMaterno}</td>
            <td>${telefono}</td>
            <td>${ci}</td>
            <td>${Direccion}</td>
            <td>${Especialidad}</td>
            <td>${Correo}</td>
            <td>${fecha_de_registro}</td>
        `;
        tabla.appendChild(fila);

        // Limpia los campos del formulario
        document.querySelector('form').reset();
    });
});