const mongoose = require('mongoose');

// Configurando o mongoose      ---->    sempre o configure desta forma
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/aprendendo', {
    useMongoClient: true
}).then(() => {
    console.log('Conectado ao Banco de dados com sucesso...');
}).catch((err) => {
    console.error('Houve um problema ao tentar conectar ao DB' + err);
})

// Definir o model diretamente do mon goose:  Model - Usuários

const UsuarioSchema = mongoose.Schema({

    nome: {
        type: String,
        require: true     // identifica se este requisito é obrigatório ou não
    },
    sobrenome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    },
    pais: {
        type: String,       // não foi colocado require pois não é uma informação obrigatória.
    }

})

mongoose.model('Usuarios', UsuarioSchema)    // Criação desta collection

// para inserir dados dentro desta collection.

const novoUsuario = mongoose.model('Usuarios');    //  Referenciando o a collection criada

new novoUsuario({
    nome: 'Joao',
    sobrenome: 'Silva',
    email: 'joaosilva@gmail.com',
    idade: 48,
    pais: 'Brasil'
}).save().then(() => {
    console.log('Usuário cadastrado com sucesso!');
}).catch((err) => {
    console.error('Houve um erro ao registrar o usuário: ' + err);
})