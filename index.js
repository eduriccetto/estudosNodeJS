const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bobyParse = require('body-parser');
const Post = require('./modules/6.1-TestPost');
const bodyParser = require('body-parser');
const { create } = require('express-handlebars');

// config

    //Template Engine 
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

    //Body Parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bobyParse.json())

    // Rotas
    app.get('/cad', function(req, res) {
        res.render('forms')
    })

    app.post('/add', function(req, res) {
        create.Post({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function(){
            res.send('Post criado com sucesso!')
        }).catch(function(erro){
            res.send('Ouve um erro: ' + erro)
        })
    })

app.listen(8081, function(){
    console.log('Servidor rodando na url: http://localhost:8081');
})