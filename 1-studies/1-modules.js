// para execuar algum node, verifique antes seu endereço local.

// Exportar uma função para trabalhar em module:
var soma = function(a, b){ // Para exportar é necessário passar uma função para dentro de uma variável.
    return a+b;
}

module.export = soma;

// podemos exportar qualquer coisa, uma função, uma classe ou um objeto.

// Para importar uma função:
var SomaFunc = require('./somar'); // './somar' referece ao endereço e nome do arquivo onde está salvo a função acima.
                    // este require seria o mesmo que um Import.
// Para usar:
console.log(SomaFunc(1,2)); // O que exibira a soma de 1 + 2