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
        var pieza = document.getElementById('pieza').value;
        var tratamiento = document.getElementById('tratamiento').value;
        var costo = document.getElementById('costo').value;
        var fecha = document.getElementById('fecha').value;

        // Crea una nueva fila en la tabla de pacientes registrados
        var tabla = document.querySelector('.tabla-pacientes tbody');
        var fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${nombre}</td>
            <td>${apellidoPaterno}</td>
            <td>${apellidoMaterno}</td>
            <td>${telefono}</td>
            <td>${ci}</td>
            <td>${pieza}</td>
            <td>${tratamiento}</td>
            <td>${costo}</td>
            <td>${fecha}</td>
        `;
        tabla.appendChild(fila);

        // Limpia los campos del formulario
        document.querySelector('form').reset();
    });
});