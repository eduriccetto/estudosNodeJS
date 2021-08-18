
/**
 *                              Lib (Biblioteca) Body-parser
 * 
 *        A lib (Biblioteca) Body-parser é um pacote npm que serve para receber dados de qualquer 
 *     forms para dentro do express. Vamos precisar instalar com o comando:
 * 
 *     -  $ npm install --save body-parser * 
 */


const express = require('express');            
const app = express();
const handlebars = require('express-handlebars'); 
const bodyParser = require('body-parser')     //  aqui importamos a biblioteca instalada.   
const Sequelize = require('sequelize');     

// Template Engine ---------------------------------------
app.engine('handlebars', handlebars({defaultLayout: 'main'}))    
app.set('view engine', 'handlebars')     

// Body Parser -------------------------------------------
app.use(bodyParser.urlencoded({extended: false}))     //  aqui configuramos o body-parser.
app.use(bodyParser.json())

// Conexão com o DB mysql ---------------------------------
const sequelize = new Sequelize('test2', 'user', 'mysql123', {    
    host: 'localhost',                                                
    dialect: 'mysql'

})
// Rotas ---------------------------------------------------
app.get('/cadastro', function(req, res){
   res.render('forms')
})

// app.post('/add', function(resq, res){
//     res.send('Formulário recebido')     // Aqui vamos alterar nosso app.post para este cód abaixo
// })

app.post('/add', function(req, res){
    var texto = req.body.titulo                          // podemos referênciar diretamente ou
    res.send('Texto: '+ texto +'Conteudo: '+req.body.conteudo) // atribuir em variáveis
})
    //      Este "Texto" e este "Conteudo " referense aos names dos inputs do forms.
    //  O primeiro "input" é o Texto e o "textarea" é o Conteudo.

    //     <form action="">
    //  <p>Título: </p>
    //  <input type="text" name="titulo">
    //  <p>Conteúdo:</p>
    //  <textarea name="conteudo"></textarea>
    //  <button type="submit">Cadastrar postagem</button>
    //     </form>

//------------------------------------------------------------
app.listen(8081, function(){
    console.log('Servidor rodando com Handlebars');    
})                                                     
