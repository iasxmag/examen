const mongoose = require('mongoose');

// Definición del esquema para los pokemons en la base de datos
const personajeSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  nombre: { type: String, required: true},
  tipo: { type: String, required: true },
  nivelPoder: { type: Number, required: true },

});

module.exports = mongoose.model('Personaje', personajeSchema);