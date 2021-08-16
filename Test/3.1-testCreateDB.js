const Sequelize = require('sequelize');
const sequelize = new Sequelize('test2', 'user', 'mysql123', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log('Conectado ao DB');
}).catch(function (erro){
    console.log('Falha ao conectar ao DB' + erro);
})