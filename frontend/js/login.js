document.getElementById('loginForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const user = document.getElementById('loginUser').value.trim();
  const password = document.getElementById('loginPassword').value.trim();

  if (!user || !password) {
    alert('Por favor completa todos los campos');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/usuarios/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        usuario: user,
        contrasena: password
      })
    });

    const result = await response.json();

    if (result.success) {
      alert('¡Inicio de sesión exitoso!');
      window.location.href = 'productos.html'; // Redirigir a la página principal
    } else {
      alert(result.message || 'Credenciales incorrectas');
    }
  } catch (error) {
    console.error('Error en inicio de sesión:', error);
    alert('Error al iniciar sesión');
  }
});