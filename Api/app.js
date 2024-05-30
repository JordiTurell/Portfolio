const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const multer = require('multer')

const sequelize = require('./sequelize');
const servicios = require('./servicios/servicios');
const { join } = require('path');

const app = express();
const port = 3000;

app.use(cors({
  origin: 'http://localhost:4200' // Permitir solicitudes solo desde http://localhost:4200
}));

// Middleware para manejar solicitudes JSON
app.use(express.json());

// Middleware para verificar el token JWT en las solicitudes protegidas
function verificarToken(req, res, next) {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1]; // Extrae el token del encabezado
  if (!token) {
    return res.status(401).json({ mensaje: 'Token no proporcionado' });
  }

  jwt.verify(token, 'PortfolioKeyS@w@mur@1984', (err, decoded) => {
    if (err) {
      return res.status(403).json({ mensaje: 'Token inválido', err: err.message });
    }
    req.usuario = decoded; // Almacenar el usuario decodificado en el objeto de solicitud
    next(); // Permitir que la solicitud continúe
  });
}

// Configura el middleware Multer con las opciones de almacenamiento
const multerUpload = multer({ 
  dest: join(__dirname, '../src/assets/'),
  limits: {
    fieldSize: 10000000
  }
});


//Login
app.post('/login', async (req, res) => {
  return res.json(await servicios.UsuarioServicio.iniciarSesion(req, res))
});

//Sobremi
app.post('/sobremi/set', verificarToken, async (req, res) => {
  return res.json(await servicios.SobremiServicio.Create(req))
});
app.get('/sobremi/get', verificarToken, async (req, res) => {
  return res.json(await servicios.SobremiServicio.Get(req))
});
app.get('/sobremi/getsobremi', async (req, res) => {
  return res.json(await servicios.SobremiServicio.Get(req))
});

//Skills
app.get('/skills/listado', verificarToken, async (req, res) => {
  return res.json(await servicios.SkillsServicio.listar())
});
app.get('/skills', async (req, res) => {
  return res.json(await servicios.SkillsServicio.front(req))
});
app.post('/skills/create', verificarToken, async (req, res) => {
  return res.json(await servicios.SkillsServicio.create(req))
});
app.get('/skills/ghost', verificarToken, async (req, res) => {
  return res.json(await servicios.SkillsServicio.ghost(req))
});
app.get('/skills/get/:id', verificarToken, async (req, res) => {
  const { id } = req.params
  return res.json(await servicios.SkillsServicio.get(id))
});
app.post('/skills/updatefile/:id', multerUpload.single('file'), async (req, res) => {
  const { id } = req.params
  console.log(id)
  res.sendStatus(200)
  // console.log(req)
  // if (!req.file) {
  //   return res.status(400).json({ mensaje: 'No se ha proporcionado ninguna imagen' });
  // }
  // const rutaImagen = req.file.path;
  // console.log(rutaImagen)
  // return res.json(await servicios.SkillsServicio.updatefile(req, id))
});


// Sincroniza los modelos con la base de datos e inicia el servidor
sequelize.sync()
  .then(() => {
    console.log('Modelos sincronizados con la base de datos.');
    app.listen(port, () => {
      console.log(`Servidor iniciado en http://localhost:${port}`);
    });
  })
  .catch(error => {
    console.error('Error al sincronizar modelos con la base de datos:', error);
  });
