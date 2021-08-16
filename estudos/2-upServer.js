// Levantar um servidor:

var http = require('http'); // atravéz do require estamos importando uma função nativa do node HTTP para subir um servidor

http.createServer(function(req,res){  // req = requisição do cliente p/ servidor e res = resposta do servior p/ cliente.
    res.end('Hello!');  // o que será printado na tela
}).listen(8081);  // O .listen esta dizendo que vai escutar na porta X, no caso a 8081

console.log('Servidor rodando');  //  o que será exibido no painel do terminal assim que o servidor subir.  


//#########################################################

// Levantar um servidor com FrameWork Express

/**
 * para utilizarmos este framework, vamos precisar de um gerenciador de pacotes, neste caso o NPM
 * no terminar damos o comando npm install com nome do pacote que queremos instalar:
 * 
 *         $ npm install express --save
 * 
 * Quando terminar de instalar, vai ter baixado um pacote de arquivos chamado node_modules e se for 
 * a primeira instalação npm, vai criar um arquivo pakage-lock.json
 * */ 

 const express = require('express'); // aqui realizamos a importação do express
 const App = express();  // colocamos esta chamada dentro de uma const

 App.get('/', function(req, res){
     res.send('Seja bem vindo ao meu web site!');
 });

 App.listen(8081, function(){
    console.log('Servidor express rodando');
 });