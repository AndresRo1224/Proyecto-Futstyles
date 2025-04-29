document.getElementById('registerForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const name = document.getElementById('registerName').value.trim();
  const user = document.getElementById('registerUser').value.trim();
  const password = document.getElementById('registerPassword').value.trim();

  if (!name || !user || !password) {
    alert('Por favor completa todos los campos');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/usuarios/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nombre: name,
        usuario: user,
        contrasena: password
      })
    });

    const result = await response.json();

    if (result.success) {
      alert(result.message || '¡Cuenta creada con éxito!');
      window.location.href = 'login.html'; // Redirigir al login
    } else {
      alert(result.message || 'No se pudo crear la cuenta');
    }
  } catch (error) {
    console.error('Error en registro:', error);
    alert('Error al registrar');
  }
});