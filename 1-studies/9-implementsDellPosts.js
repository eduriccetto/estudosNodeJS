

/**
 * 
 *              Agora vamos implementar uma requisição com função de DELETE de um post 
 * 
 *      Vamos criar um botão dentro da estrutura each do home.handlebars assim:
 * 
 *      <h1>Lista de posts: </h1>

        {{#each posts}}

            <h1>{{dataValues.titulo}}</h1>
            <p>{{dataValues.conteudo}}</p>
            <button>Deletar</button>          // isso vai criar um botão de deletar 
            <hr>

        {{/each}}
        ------------------------------------------------------------

        Na sequencia precisamos endereçar uma rota para e ste botão:

        ------------------------------------------------------------
        <h1>Lista de posts: </h1>

        {{#each posts}}

            <h1>{{dataValues.titulo}}</h1>
            <p>{{dataValues.conteudo}}</p>
            <a href="/deletar{{dataValues.id}}"><button>Deletar</button></a>
            <hr>

        {{/each}}

        --------------------------------------------------------------
        Colocando este <button> dentro de um <a href="/deletar{{dataValues.id}}"> button </a>
        assim especificando a rota /deletar com o {id} do post como parametro do href""
 * 
        Dentro do nosso index.js vamos redirecionar o usuário para uma outra rota quando ele clicar.
 */

app.get('/deletar/:id', function(req, res){      // criando uma nova rota app.get com a rota /deletar
    Post.destroy({where: {'id': req.params.id}}).then(function(){  // utilizamos o argumento destroy
        res.send('Postagem deletada com sucesso!')       // com where para passar o id como parametro
    }).catch(function(erro){                   // e ja colocamos um .then para exibir msg de sucesso
        res.send('Esta postagem não existe!') // e um catch de erro para exibir msg de erro
    })
})

// Assim com as  rotas e specificadas conseguimos deletar os posts pelo seu id do DB