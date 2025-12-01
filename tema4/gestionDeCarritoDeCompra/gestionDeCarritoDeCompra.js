//  Estado de la aplicación (datos del carrito)
let carrito = [];

// ================================ 
//  FUNCIONES FLECHA PRINCIPALES
// ================================

// 1. AÑADIR PRODUCTO AL CARRITO 
const añadirProducto = () => {
    const nombre = document.getElementById('nombre').value.trim();
    const precio = parseFloat(document.getElementById('precio').value);

    // Validación 
    if (!nombre || precio <= 0 || isNaN(precio)) {
        alert('❌ Introduce nombre y precio válido');
        return;
    }

    // Crear nuevo producto 
    const nuevoProducto = {
        id: Date.now(), // ID único 
        nombre,
        precio,
        cantidad: 1
    };

    // Añadir al carrito 
    carrito.push(nuevoProducto);

    // Limpiar formulario 
    document.getElementById('nombre').value = '';
    document.getElementById('precio').value = '';

    // Actualizar vista 
    renderizarCarrito();
};

// 2. ELIMINAR PRODUCTO

const eliminarProducto = (id) => {
    for (i = 0; i < carrito.length; i++)
        if (carrito[i].id === id) {
            carrito.splice(i, 1);
            renderizarCarrito();
            return;
        }
};

// 3. CAMBIAR CANTIDAD
const cambiarCantidad = (a, b) => {
    for (i = 0; i < carrito.length; i++)
        if (carrito[i].id === a) {
            carrito[i].cantidad = b;
            renderizarCarrito();
            return;
        }
}

// 4. CALCULAR TOTALES
const calcularTotales = () => {
    const totalProductos = carrito.reduce((total, producto) => total + producto.cantidad, 0);

    let totalPrecio = 0;
    carrito.forEach(e => { totalPrecio += e.precio; });

    return { totalProductos, totalPrecio: totalPrecio.toFixed(2) };
};

// 5. VACIAR CARRITO 
const vaciarCarrito = () => {
    if (confirm('¿Vaciar todo el carrito?')) {
        carrito = [];
        renderizarCarrito();
    }
};

// 6. RENDERIZAR CARRITO (FUNCIÓN PRINCIPAL) 
const renderizarCarrito = () => {
    const lista = document.getElementById('listaProductos');
    const containerTotal = document.getElementById('totalContainer');

    // Si está vacío 
    if (carrito.length === 0) {
        lista.innerHTML = '<p style="text-align: center; color: #6c757d;"> 🛒 Carrito vacío. ¡Añade productos!</p > ';
        containerTotal.innerHTML = '';
        return;
    }

    // Generar HTML con map 
    const productosHTML = carrito.map(producto => ` 
        <div class="producto"> 
        <strong>${producto.nombre}</strong>  
        <span style="float: right;"> 
        ${producto.precio.toFixed(2)}€ x  
        <input type="number" value="${producto.cantidad}"  
        min="1" max="99"  
        onchange="cambiarCantidad(${producto.id}, this.value)" 
        style="width: 50px; text-align: center;"> 
        = ${(producto.precio * producto.cantidad).toFixed(2)}€ 
        </span> 
        <br><br> 
        <button class="eliminar" onclick="eliminarProducto(${producto.id})"> Eliminar</button> 
        </div> 
    `).join('');

    lista.innerHTML = productosHTML;

    // Mostrar totales 
    const totales = calcularTotales();
    containerTotal.innerHTML = ` 
        <p> 📦 Productos: ${totales.totalProductos}</p> 
        <p class="total"> 💰 Total: ${totales.totalPrecio}€</p> 
        <button onclick="vaciarCarrito()" style="background: #ffc107; color: #212529;"> Vaciar Carrito</button>
    `;
};