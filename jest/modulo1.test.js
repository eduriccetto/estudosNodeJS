
const modulo1 = require('./modulo1')  // importa o modulo

describe('basic feature', ()=> {     // descrição do teste
    it('should return the right value', ()=> {   // o que esperamos do teste de forma descritiva
        expect(modulo1.func1(10)).toBe(11)   // o que esperamos do teste de forma lógica
    })
    
    it('should return the bad value', ()=> {  // um test que dá errado só para testar.
        expect(modulo1.func1(10)).toBe(11)    // podemos trocar (11) por (12)
    })
})