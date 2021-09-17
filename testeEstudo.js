const meuNomeCompleto = [
    {nome: 'Eduardo'},
    {nome: 'Peixoto'},
    {nome: 'Riccetto'}
]

meuNomeCompleto.forEach((nome, posicao) => {
    console.log(`Este nome: ${nome.nome} está na posição: ${posicao + 1}`);
});