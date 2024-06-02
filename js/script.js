document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.btn1');
    const tabla = document.getElementById('tabla');
    const totalElement = document.getElementById('total');
    const cantidadSpan = document.getElementById('cantidad');
    const incrementoBtn = document.getElementById('incremento');
    const decrementoBtn = document.getElementById('decremento');
    let total = 0;

    incrementoBtn.addEventListener('click', function () {
        let cantidad = parseInt(cantidadSpan.textContent);
        cantidad++;
        cantidadSpan.textContent = cantidad;
    });

    decrementoBtn.addEventListener('click', function () {
        let cantidad = parseInt(cantidadSpan.textContent);
        if (cantidad > 1) {
            cantidad--;
            cantidadSpan.textContent = cantidad;
        }
    });

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const producto = this.getAttribute('data-producto');
            const precio = parseFloat(this.getAttribute('data-precio'));
            const cantidad = parseInt(cantidadSpan.textContent);
            agregarProducto(producto, precio, cantidad);
            cantidadSpan.textContent = 1;
        });
    });

    function agregarProducto(producto, precio, cantidad) {
        const fila = document.createElement('tr');
        const cantidadCell = document.createElement('td');
        const productoCell = document.createElement('td');
        const precioCell = document.createElement('td');
        const totalCell = document.createElement('td');

        const totalProducto = precio * cantidad;

        cantidadCell.textContent = cantidad;
        productoCell.textContent = producto;
        precioCell.textContent = precio.toFixed(2);
        totalCell.textContent = totalProducto.toFixed(2);

        fila.appendChild(cantidadCell);
        fila.appendChild(productoCell);
        fila.appendChild(precioCell);
        fila.appendChild(totalCell);
        tabla.appendChild(fila);

        total += totalProducto;
        totalElement.textContent = `$${total.toFixed(2)}`;
    }
});