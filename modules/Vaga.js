const mongoose = require('mongoose');

const vagaSchema = new mongoose.Schema({
  numero: { type: Number, required: true },
  ocupada: { type: Boolean, default: false },
  localizacao: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true }
  },
  ultimaAtualizacao: { type: Date, default: Date.now }
});

mongoose.model('Vaga', vagaSchema); // Aqui o modelo é registrado com o nome "Vaga"
