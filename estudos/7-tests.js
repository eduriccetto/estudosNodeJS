
/**
 *                                      Automátizados
 * 
 *      Testes automatizados = bloco de códigos que testam se sua aplicação está rodando corretamente.
 *  garantimos uma automatização dos testes manuais. Garantimos que mesmo com algumas alterações a 
 *  aplicação vai continuar funcionando. Serve como documentação e traz segurança para uma possível
 *  refatoração. Alé de uma redução consideravel de bugs.
 * 
 *      Existem 3 tipos de testes automátizados:
 *      - teste unitário
 *      - teste de integração 
 *      - teste end to end
 *  # Leitura sobre os tipos de testes automátizados:
 *      -https://www.devmedia.com.br/dominando-os-tipos-de-testes-automatizados/33867
 * 
 *                                          TDD
 * 
 *      TDD (desenvolvimento guiado por testes ) = é uma técnica onde planejamos primeiramente os
 *  testes antes do desenvolvimento do código. Ele segue um fluxo padrão de fail e pass. 
 * 
 *      Uma das ferramentas utilizadas para testes em Node.Js é o JEST.
 *      # Doc: https://jestjs.io/docs/getting-started
 * 
 *      - $ npm install --save-dev jest
 * 
 *      Na sequência adicionamos "script" com "jest" no package.json
 * 
 *      {
        "dependencies": {
            "body-parser": "^1.19.0",
            "express": "^4.17.1",
            "express-handlebars": "^5.3.3",
            "mysql2": "^2.3.0",
            "sequelize": "^6.6.5"
        },
        "devDependencies": {
            "jest": "^27.0.6"
        },
        "scripts": {
            "test": "jest"          // acrescentando esta parte
        }
        }

 * 
 */