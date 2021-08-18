/**
 *                                   Biblioteca (LIB) Handlebars 
 * 
 *      Como funciona: Handlebars.js é um compilador escrito com JavaScript que pega qualquer HTML e 
 * expressão Handlebars e compila para uma função JavaScript. Esta função JavaScript derivada recebe 
 * um parâmetro, um objeto - seus dados - e retorna uma string com o HTML e os valores das 
 * propriedades do objeto inseridos dentro do HTML. Então, você acaba com um string (HTML) que tem 
 * valores de propriedades dos objetos inseridos em lugares relevantes, e insere a string na página.
 * 
 * -npm install --save express-handlebars        // para instalar o pacode da biblioteca.
 */

//######################## Importações ###########################

 const express = require('express');            // vamos precisar do express para subir um servidor.
 const app = express();
 const handlebars = require('express-handlebars');    // importamos a biblioteca Handlebars instalada.
 const Sequelize = require('sequelize');         // importamos o sequelize p/ conexão com DB

//###################### Template Engine #########################

 app.engine('handlebars', handlebars({defaultLayout: 'main'}))   // 'main' é o template padrão da sua 
 app.set('view engine', 'handlebars')                            //   aplicação.


//###################### Conexão com DB ##########################
                                 
 const sequelize = new Sequelize('test2', 'user', 'mysql123', {    // aqui preparamos a estrutura
     host: 'localhost',                                                // para conexão com o DB
     dialect: 'mysql'
 })
//################################################################


 /**    Agora precisarmos criar uma pasta na raiz do projeto com o nome de "views", dentro desta pasta
  *  vamos criar outra pasta com o nome de "layout" e depois dentro desta pasta criaremos um arquivo
  *  chamado de "main.handlebars". Dentro deste arquivo mais, vamos então montar uma estrutura HTML-5
  * 
  *    --------------------------------------------------
  *         <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Postagens NodeJs</title>
            </head>
            <body>
                {{{body}}}
            </body>
            </html>
  *    ----------------------------------------------------
  */

//################### Criação de uma Rota #########################

 app.get('/Home', function(req, res){
     res.send('ROTA HOME')
 })

//######## Chamada do forms handlebars por uma ROTA #############

/**
 *   Agora dentro da pasta "view", criaremos o arquivo forms.handlebars.
 *   E dentro deste arquivo vamos montar uma estrutura de forms.
 * 
 *   <form action="">
     <p>Título: </p>
     <input type="text" name="titulo">
     <p>Conteúdo:</p>
     <textarea name="conteudo"></textarea>
     <button type="submit">Cadastrar postagem</button>
     </form>
 
     Não precisamos colocar uma estrutura comun de HTML-5 porque o nosso main (main.handlebars) já
     é a nossa estrutura de template padrão da aplicação.
     Quando vc define a estrutura do main como principal não precisa ficar usando a estrutura htlm
     toda vez, basta utilizar uma como a de cima direte quando tiver um arquivo "arq.handlebars".
 * 
 */

 app.get('/cadastro', function(req, res){
     res.render('forms')
 })

//##################### Saída do Servidor ########################
 app.listen(8081, function(){
     console.log('Servidor rodando com Handlebars');   //    expecificamos a porta que o servidor vai 
 })                                                    // utilizar e a mensagem do terminal.


 /**
  * Para funcionar, é preciso estar na pasta raiz para chamar o forms. Portando criei um arquivo
  * chamado "app.js na pasta raiz onde fiz um require do arquivo "4-testLibHandlebars.js". E apartir de
  * agora, sempre que precisarmos rodar algo, vamos tentar puxar por require neste "app.js".
  */