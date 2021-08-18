
//          Criação de tabela via Vode.js

const Sequelize = require('sequelize');
const sequelize = new Sequelize('test2', 'user', 'mysql123', {
    host: 'localhost',
    dialect: 'mysql'
})


const Aulas = sequelize.define('aulas', {
    nome: {
        type: Sequelize.STRING
    },
    dia: {
        type: Sequelize.INTEGER
    },
    professor: {
        type: Sequelize.STRING
    }
})

Aulas.create({
    nome: 'Empreendedorismo',
    dia: 7,
    professor: 'Zorzo'
})

Aulas.create({
    nome: 'Ingles',
    dia: 5,
    professor: 'Thiago'
})

//Aulas.sync({force:true})          comentado este comando para poder rodar denovo.