// video aula 23

/**
 *              Agora vamos continuar, mas estruturando melhor nossos cód em modulos.
 *      Vamos criar uma pasta na raiz chamada de "modules" e dentro dela vamos criar 
 *      um arquivo "6-testDataStructure.js" onde vamos alocar nossa conexão com o 
 *      banco de dados.
 */


const Sequelize = require('sequelize')

const sequelize = new Sequelize('test2', 'user', 'mysql123')
