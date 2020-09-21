const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/prueba');

const Inmueble = mongoose.model('inmuebles',{
    tipoOperacion: String,
    tipoInmueble: String,
    //direccion: String,
    //fotos: [{type: String}],
    //ambientes: Number,
    //metrosCuadrados: Number,
    //descripcion: String,
    //datosPropietario: { nombre: String, apellido: String, email: String }
});

const unaCasa = {tipoOperacion: 'alquiler', tipoInmueble: 'casa'};

const ObjetounaCasa = new Inmueble(unaCasa);
ObjetounaCasa.save();

Inmueble.find({tipoInmueble: 'casa'}).then( response => {
    console.log(response)
} )

