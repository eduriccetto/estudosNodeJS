
const express = require('express');            
const app = express();
const handlebars = require('express-handlebars'); 
const bodyParser = require('body-parser')        
const Sequelize = require('sequelize');     

app.engine('handlebars', handlebars({defaultLayout: 'main'}))    
app.set('view engine', 'handlebars')     

app.use(bodyParser.urlencoded({extended: false}))     
app.use(bodyParser.json())

const sequelize = new Sequelize('test2', 'user', 'mysql123', {    
    host: 'localhost',                                                
    dialect: 'mysql'

})
app.get('/cadastro', function(req, res){
   res.render('forms')
})

app.post('/add', function(req, res){
    var texto = req.body.titulo
    res.send('Texto: '+ texto +'Conteudo: '+req.body.conteudo)
})

app.listen(8081, function(){
    console.log('Servidor rodando com Handlebars');    
})                                                     
