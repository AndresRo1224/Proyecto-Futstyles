const apiUrl = 'http://localhost:5000/api/camisetas';
let camisetas = [];

document.addEventListener('DOMContentLoaded', async () => {
  await cargarCamisetas();
});

async function cargarCamisetas() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }
    camisetas = await response.json();

    // Verificar los datos recibidos
    console.log("Datos recibidos del backend:", camisetas);

    mostrarCamisetas(camisetas);
  } catch (error) {
    console.error('Error al cargar camisetas:', error);
  }
}

function mostrarCamisetas(lista) {
  const container = document.getElementById('productos-container');
  container.innerHTML = '';

  if (lista.length === 0) {
    container.innerHTML = '<p>No se encontraron camisetas.</p>';
    return;
  }

  lista.forEach(camiseta => {
    const card = document.createElement('div');
    card.classList.add('card');

    // Usar las propiedades actuales de la base de datos
    const nombre = camiseta.equipo || "Nombre no disponible";
    const descripcion = camiseta.temporada || "Descripción no disponible";
    const precio = camiseta.precio ? `$${camiseta.precio}` : "Precio no disponible";
    const imagen = "assets/default-image.png"; // Imagen por defecto

    card.innerHTML = `
      <img src="${imagen}" alt="${nombre}">
      <div class="card-body">
        <h3>${nombre}</h3>
        <p>${descripcion}</p>
        <p class="precio">${precio}</p>
        <button onclick="agregarAlCarrito(${camiseta.id_camiseta})">
          <i class="fas fa-cart-plus"></i> Agregar al carrito
        </button>
      </div>
    `;
    container.appendChild(card);
  });
}

function filtrarProductos() {
  const nombreFiltro = document.getElementById('filterName').value.toLowerCase();
  const precioFiltro = parseFloat(document.getElementById('filterPrice').value);

  const filtradas = camisetas.filter(c => {
    const coincideNombre = c.equipo && c.equipo.toLowerCase().includes(nombreFiltro);
    const coincidePrecio = isNaN(precioFiltro) || c.precio <= precioFiltro;
    return coincideNombre && coincidePrecio;
  });

  mostrarCamisetas(filtradas);
}

function agregarAlCarrito(idProducto) {
  // Puedes usar localStorage para simular el carrito o conectarlo con PHP
  alert('Producto agregado al carrito (id: ' + idProducto + ')');
}

function logout() {
  // Lógica para cerrar sesión
  window.location.href = 'auth.html'; // o logout.php
}