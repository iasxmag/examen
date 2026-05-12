const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Rutas de los objetos que se van a crear que van a estar en routes
const personajeRoutes = require('./routes/personaje');
app.use('/personaje', personajeRoutes);

// Conexión a MongoDB
mongoose.connect('mongodb+srv://iasmina:1234@cluster0.v2ld42t.mongodb.net/parcial')
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error(err));

app.listen(3000, () => console.log('Servidor en http://localhost:3000'));
