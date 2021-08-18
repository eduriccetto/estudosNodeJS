// video aula 23

/**
 *              Agora vamos continuar, mas estruturando melhor nossos cód em modulos.
 *      Vamos criar uma pasta na raiz chamada de "modules" e dentro dela vamos criar 
 *      um arquivo "6-TestDataStructure.js" onde vamos alocar nossa conexão com o 
 *      banco de dados.
 * 
 *      É sempre recomendável que quando for criar arquivos de modules, utilize a primeira
 *      letra maiuscula (padrão por convenção). Outra boa prática é que esteja sempre no
 *      singular e não no plural.
 */


const Sequelize = require('sequelize')

const sequelize = new Sequelize('test2', 'user', 'mysql123', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize       // assim exportando as duas constantes de cima.
}

// Vamos crir mais um modulo dentro da pasta com o nome de "6.1-TestPost.js"

const { sequelize } = require('../estudos/6-dataStructure') // importamos o arq "6-dataStructure"
const db = require('./6-TestDataStructure')                 // aqui também

const Post = db.sequelize.define('postagens', {      // aqui criamos a tabela nova
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})

Post.sync({force: true})           // aqui forçamos a execução
// lembrando que sempre que gerarmos uma nova tabela, apague este comando para usar denovo
// Se manter ele vai reescrever em cima da já criada
// Depois de apagar o comando de cima, exportamos este module com [$ module.exports = Post]

