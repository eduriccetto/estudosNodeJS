
/**
 *          $ npm install sequelize   // ou //   $ npm install --save sequelize
 *   
 *    É um pacote npm que permite realizar os comandos MYSQL diretamente do NODE.JS
 * 
 *          $ npm install mysql2    = instalar o mysql para uso no Node.js
 */

 const Sequelize = require('sequelize');
 const sequelize = new Sequelize('nomeDatabase', 'userDoMysql', 'senhaDoMysql', {
     host: 'localhost',
     dialect: 'mysql'
 })

 sequelize.authenticate().then(function(){
     console.log('Conectado ao DB');             // caso dê certo a conexão, vai aparecer está msg.
 }).catch(function (erro){
     console.log('Falha ao conectar ao DB' + erro);  // caso dê errado, vai aparecer está msg.
 })

 //   Com estes comandos nos conectamos a um database especifico indicado na linha 9,
 // colocando tambem o usuário do mysql e a senha.
