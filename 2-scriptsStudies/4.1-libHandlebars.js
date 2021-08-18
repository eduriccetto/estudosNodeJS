
 const express = require('express');            
 const app = express();
 const handlebars = require('express-handlebars');    
 const Sequelize = require('sequelize');     

 app.engine('handlebars', handlebars({defaultLayout: 'main'}))    
 app.set('view engine', 'handlebars')                            

 const sequelize = new Sequelize('test2', 'user', 'mysql123', {    
     host: 'localhost',                                                
     dialect: 'mysql'
 })
 
 app.get('/cadastro', function(req, res){
    res.render('forms')
 })

 app.post('/add', function(req, res){
     res.send('Formulário recebido')
 })


 app.listen(8081, function(){
     console.log('Servidor rodando com Handlebars');    
 })                                                     
 