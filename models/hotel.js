

const { Schema, model } = require('mongoose');


const HotelSchema =  Schema({
    nombre: String,
    direccion: String,
    ciudad: String,
    estrellas: Number,
    telefono: String,
    correo: String
  });

module.exports = model('Hotel', HotelSchema);