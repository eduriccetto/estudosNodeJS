
/**
 *                        Continuação... Biblioteca (LIB) Handlebars
 * 
 *      -Vamos fazer algumas alterações no nosso arquivo forms.handlebars
 *   -----------------------------------------------------------------
 *          <form action="/add" method="POST">         // aqui escrevemos a rota para onde mandaremos
                <p>Título: </p>                         os dados, no caso vai ser este "/add" e 
                <input type="text" name="titulo">       adicionamos o método POST = (method="POST")
                <p>Conteúdo:</p>
                <textarea name="conteudo"></textarea>
                <button type="submit">Cadastrar postagem</button>
            </form>

     ------------------------------------------------------------------
 */

 // - Em nosso arquivo 4.1-libHandlebars.js, vamos fazer também algumas alterações.


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

 app.post('/add', function(req, res){  //    faremos um método post, criando a rota que chamamos no
     res.send('Formulário recebido')    // forms.handlenbars, com um res.send avisando que os
 })                                     // dados foram enviados para a rota.


 app.listen(8081, function(){
     console.log('Servidor rodando com Handlebars');    
 })          