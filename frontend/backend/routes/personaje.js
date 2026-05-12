const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//Lo que guardamos en la base de datos (poner nombre de la colección y los campos que se veran)
const Personaje = mongoose.model('ut2', new mongoose.Schema({
  nombre: String,
  tipo: String,
  nivelPoder: Number,
 
}));

// GET - Obtener todos los personajes
router.get('/', async (req, res) => {
  const personaje = await Personaje.find();
  res.json(personaje);
});

// POST - Crear un personaje
router.post('/', async (req, res) => {
  const nuevo = new Personaje(req.body);
  await nuevo.save();
  res.json(nuevo);
});


module.exports = router;