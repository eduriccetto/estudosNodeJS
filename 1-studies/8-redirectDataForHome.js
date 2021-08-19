

/**
 *               Aqui vamos trazer nossos dados armazenados no DB para a rota home
 * 
 *      Com está estrutura abaixa no arquivo raiz index.js
 */

     // Rotas
     app.get('/', function(req, res) {
        Post.finAll({order: [['id', 'DESC']]}).then(function(posts){ // onde esta escrito posts, pode colocar o nome que quizer.
            res.render('home', {posts: posts})// arq 'home' fica na mesma pasta do 'forms', na views
        })
    })                            // O que recebemos deste Post.findAll() é um array de posts
                    // como paramatro de Post.findAll(), podemos passar: {order: [['id', 'DESC']]} 
                    // para exibir os dados do bando do mais novo para o mais antigo
                    // ou {order: [['id', 'ASC']]} para exibir do mais antigo para o mais novo.
/**
 * Onde o este .then se encarrega de receber todos os dados de postagens
 * E esta variável posts na linha 11 recebe os dados de .then   
 * Dentro do arquivo home.handlebars, vamos estruturar como estes dados vão ser exibidos.  
 * 
 *          <h1>Lista de posts: </h1>

            {{#each posts}}       // each segnifica cada, portanto para cada postagem, exiba o titulo
                                               dela, exiba o conteudo e pule uma linha.
                <h1>{dataValue.titulo}</h1>
                <p>{dataValue.conteudo}</p>
                <hr>                         // <hr> para pular linha

            {{/each}}
 *   
 */

 