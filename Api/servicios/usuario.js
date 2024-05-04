const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Usuario = require('../modelos/usuario');

async function iniciarSesion(req, res) {
  const { user, password } = req.body

   try {
     // Busca el usuario en la base de datos por su nombre de usuario
     const usuario = await Usuario.findOne({ where: {username: user} });
     if (!usuario) {
         console.error('Credenciales incorrectas');
         return { token: 'El usuario no existe', status : false }
     }

    // Compara la contraseña proporcionada con la contraseña almacenada en la base de datos
    const contrasenaCoincide = await bcrypt.compare(password, usuario.pass);
    if (!contrasenaCoincide) {
        console.error('Credenciales incorrectas');
        return { token: 'Error al comparar las contraseñas', status : false }
    }

    // Si las credenciales son válidas, se puede generar un token de autenticación, etc.
    const token = jwt.sign({ id: usuario.id, username: usuario.username }, 'PortfolioKeyS@w@mur@1984');
    return { token: token, status : true }
   } catch (error) {
     console.error('Error al iniciar sesión:', error);
   }
}


module.exports = {
    iniciarSesion
}