

/**
 * 
 *                      Introdução ao Mongo DB
 * 
 *      Vimos até agora o MYSQL, um banco de dados relacional (SQL), agora veremos um banco de dados
 *      não relacional (NoSQL) o Mongo DB.
 * 
 *      O MYSQL trabalha com banco de dados relacionada (MYSQL):
 *      ===================================================
 *      |   nome     |    idade     |    profissão        |
 *      ===================================================     // Formatado então como uma tabela.
 *      | Eduardo    |     31       |    Programador      |
 *      ---------------------------------------------------
 *      | Joao       |     22       |    Vendedor         |
 *      ---------------------------------------------------
 *      | Maria      |     29       |    Professora       |
 *      ===================================================
 * 
 *      O Mongo DB trabalha com banco de dados não relacional (NoSQL):
 *      {
 *          name: 'Eduardo',
 *          age: 31,                         // Formata do então como uma estrutura de arquivos
 *          status: 'Solteiro',              //  Formato:  json     Coleções
 *          groups: ['news','I.T']
 *      }
 * 
 * 
 *      Ref: http://lucasmaiaesilva.com.br/posts/usando-o-mongo-shell/
 *           https://terminalroot.com.br/2020/02/mongodb.html
 */