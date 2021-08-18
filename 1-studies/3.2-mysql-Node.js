
//                     Criação de tabela via Vode.js

//  Depois de conectado ao DB, utilizamos estes comando para criar tabelas no database conectado.

 const Sequelize = require('sequelize');
 const sequelize = new Sequelize('nomeDatabase', 'userDoMysql', 'senhaDoMysql', {
     host: 'localhost',
     dialect: 'mysql'
 })


 const Postagem = sequelize.define('postagens', {
     titulo: {
         type: Sequelize.STRING
     },
     conteudo: {
         type: Sequelize.TEXT
     }
 })

//##############################

 Aulas.create({
    nome: 'Metodologia de Projeto',   // para inserir dados na tabela
    dia: 6,
    professor: 'Henri'
})

//##############################

 Postagem.sync({force:true})    // quando for inserir dados na tabela depois de já tela criado
                                //      assim, necessário apagar este comando antes de rodar novamente.