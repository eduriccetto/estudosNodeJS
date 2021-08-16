const express = require('express'); // aqui realizamos a importação do express
const App = express();  // colocamos esta chamada dentro de uma const

App.get('/', function(req, res){  // com '/' definimos as rotas como por ex: /home/produto/usuario
    res.send('Seja bem vindo testando MAIS UMA VEZ!');
});

App.listen(8081, function(){
   console.log('Servidor express rodando');
});

/**
 * #########################################################################
 * 
 *     preparando lib Nodemon
 * 
 * Está uma lib que atualiza o servidor sem precisar derrubar e levantar novamente,
 * toda vez que atualizar alguma coisa.
 *   
 *   $ npm install nodemon -g
 * 
 * Agora não utilizamos mais no terminar o comando node, e sim o comando nodemon. 
 */

 //#########################################################################

 /**
  *    Para exibir arquivos HTML ou outros nas rotas, troque o res.send('') que
  * escreve um texto, por res.sendFile('--dirname/caminho do arquivo')
  * --dirname para indicar seu diretório atual.
  */