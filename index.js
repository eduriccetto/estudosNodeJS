const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bobyParse = require('body-parser');
const Post = require('./modules/6.1-post');
const bodyParser = require('body-parser');

// config

    //Template Engine 
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

    //Body Parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bobyParse.json())

    // Rotas
    app.get('/', function(req, res) {                                 // Onde esta escrito posts, pode
        Post.findAll({order: [['id', 'DESC']]}).then(function(posts){ // colocar o nome que quizer.
            res.render('home', {posts: posts})// arq 'home' fica na mesma pasta do 'forms', na views
        })
    })

    app.get('/cad', function(req, res) {
        res.render('forms')
    })

    app.post('/add', function(req, res) {
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function(){
            res.redirect('/')
        }).catch(function(erro){
            res.send('Ouve um erro: ' + erro)
        })
    })

app.listen(8081, function(){
    console.log('Servidor rodando na url: http://localhost:8081');
})