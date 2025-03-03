const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true
        },
        cpf: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        telefone: {
            type: String,
            required: true
        },
        dataContratacao: {
            type: Date,
            required: true
        },
        dataNascimento: {
            type: Date,
            required: true
        },
        genero: {
            type: String,
            required: true
        },
        endereco: {
            cep: String,
            uf: String,
            localidade: String,
            bairro: String,
            logradouro: String,
            numero: String,
            complemento: String
        },
        cargo: {
            type: mongoose.Types.ObjectId,
            ref: 'cargo',
            required: false
        },
        departamento: {
            type: mongoose.Types.ObjectId,
            ref: 'departamento',
            required: false
        },
    },
    { timestamps: true })

const Funcionario = mongoose.model('funcionario', schema)

module.exports = Funcionario