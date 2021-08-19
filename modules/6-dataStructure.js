const Sequelize = require('sequelize')

const sequelize = new Sequelize('test2', 'user', 'mysql123', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}