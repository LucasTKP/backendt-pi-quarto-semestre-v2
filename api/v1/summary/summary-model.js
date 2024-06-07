const mongoose = require('../../../config/db');

const Resumo = mongoose.model('Resumo',{
    temperatura: Number,
    umidade: Number,
    data: Date,
    hora: String,
    choveu: Number
});

module.exports= Resumo;