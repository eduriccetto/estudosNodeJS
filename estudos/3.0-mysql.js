/**
 *    mysql  Ver 8.0.26-0ubuntu0.20.04.2 for Linux on x86_64 ((Ubuntu))

 *          Dentro do terminal usamos o comando:
 * 
 *     $ mysql -u root -p       // ou //
 *     $ mysql -h localhost -u root -p      // na sequencia coloque a senha do mysql
 * 
 *  Para entrar no MYSQL. Na sequencia vai pedir a senha cadastrada do DB MYSQL.
 * 
 * -SHOW DATABASES; = mostra quais são os databases disponiveis.
 * -CREATE DATABASE nome-da-database; = cria uma nova database.
 * -USE nome-do-database; = para selecionar um database.
 * 
 * ==============================================
 * - create table alunos (
     id integer not null primary key,
     nome varchar(60),                      // criando uma tabela no database selecionado,
     matricula varchar(15),                     dentro do terminal.
     telefone varchar(15)
     );
   ===============================================

 * -SHOW TABLES; = mostra as tabelas existentes dentro deste database.
 * -DESCRIBE nome-da-tabela; = descreve as linhas e colunas da tabela com seu tipo de dados.
 * -SELECT * FROM nome-da-tabela; = mostra a tabela com todos os seus dados cadastrados // 
 *      O caracter * siginifica ALL. Podemos filtrar a tabela com outros argumentos.
 * -DELETE FROM nome-da-tabela; = famoso DELETE sem WHERE. Deleta toda a tabela.
 *      É preciso o argumento WHERE para filtrar o delete. Por exemplo em uma tabela igual a de baixo.
 * 
 *      ================================================       // Suponha que o nome desta tabela 
 *      |codigo |    nome     |         e-mail         |      seja usuarios.
 *      ================================================
 *      |   1   |  Pedro      |  pedro@email.com       |
 *      |   2   |  Victor     |  victor@email.com      |       // Para deletar somente os dados de
 *      |   3   |  Joao       |  joao@email.com        |      Joao por exemplo, temos de utilizar o 
 *      |   4   |  Maria      |  maria@email.com       |      comando WHERE para filtrar a linha.
 *      ================================================
 * 
 *      $ DELETE FROM usuarios WHERE nome = "Victor";      // Com este comando deletamos apenas a linha 
 *                                                                      de dados do Victor
 * 
 * - UPDATE usuarios SET nome = "Jose" WHERE nome = "Joao";    // Comando de alteração de dados.
 * 
 *      ================================================       
 *      |codigo |    nome     |         e-mail         |      
 *      ================================================      // Assim mudamos o dado da coluna nome,
 *      |   1   |  Pedro      |  pedro@email.com       |      onde estava escrito Joao para Jose.
 *      |   2   |  Victor     |  victor@email.com      |       
 *      |   3   |  Jose       |  joao@email.com        |       
 *      |   4   |  Maria      |  maria@email.com       |      
 *      ================================================  
 * 
 * -

 */