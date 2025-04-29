import bcrypt from "bcryptjs";
import getConnection from "../db/database.js";

// Función para registrar un nuevo usuario
export const registrarUsuario = async (req, res) => {
  const { nombre, usuario, contrasena } = req.body;

  if (!nombre || !usuario || !contrasena) {
    return res.status(400).json({ success: false, message: "Todos los campos son obligatorios" });
  }

  try {
    const connection = await getConnection();

    // Verificar si el usuario ya existe
    const [rows] = await connection.query("SELECT * FROM usuarios WHERE usuario = ?", [usuario]);
    if (rows && rows.length > 0) {
      return res.status(400).json({ success: false, message: "El usuario ya está registrado" });
    }

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(contrasena, 10);

    // Insertar el nuevo usuario con rol 'cliente' por defecto
    const result = await connection.query(
      "INSERT INTO usuarios (nombre, usuario, contrasena, rol) VALUES (?, ?, ?, 'cliente')",
      [nombre, usuario, hashedPassword]
    );

    if (result.affectedRows === 0) {
      throw new Error("No se pudo insertar el usuario");
    }

    res.status(201).json({ success: true, message: "Usuario registrado con éxito" });
  } catch (error) {
    console.error("Error al registrar el usuario:", error.message);
    res.status(500).json({ success: false, message: "Error en el servidor" });
  }
};

// Función para iniciar sesión
export const iniciarSesion = async (req, res) => {
  const { usuario, contrasena } = req.body;

  if (!usuario || !contrasena) {
    return res.status(400).json({ success: false, message: "Todos los campos son obligatorios" });
  }

  try {
    const connection = await getConnection();

    // Verificar si el usuario existe
    const [rows] = await connection.query("SELECT * FROM usuarios WHERE usuario = ?", [usuario]);
    if (rows.length === 0) {
      return res.status(400).json({ success: false, message: "Usuario no encontrado" });
    }

    const user = rows[0];

    // Verificar la contraseña
    const isMatch = await bcrypt.compare(contrasena, user.contrasena);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: "Contraseña incorrecta" });
    }

    res.status(200).json({ success: true, message: "Inicio de sesión exitoso" });
  } catch (error) {
    console.error("Error al iniciar sesión:", error.message);
    res.status(500).json({ success: false, message: "Error en el servidor" });
  }
};