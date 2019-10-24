const chai = require('chai');
const Triangulo = require('../triangulo');

const assert = chai.assert;


describe('Verificando se é escaleno', () => {
  it('Teste: Os três lados são diferentes', () => {
    let triangulo = new Triangulo(7, 5, 10)
    assert.equal(triangulo.tipo(), "Escaleno");
  });

});

describe('Verificando se é equilatero', () => {
  it('Teste: Os três lados são iguais', () => {
    let triangulo = new Triangulo(5, 5, 5)
    assert.equal(triangulo.tipo(), "Equilatero");
  });
});

describe('Verificando se é isósceles', () => {
  it('Teste: Lados a e b iguais', () => {
    let triangulo = new Triangulo(7, 7, 10)
    assert.equal(triangulo.tipo(), "Isosceles");
  });
  it('Teste: Lados b e c iguais', () => {
    let triangulo = new Triangulo(10, 7, 7)
    assert.equal(triangulo.tipo(), "Isosceles");
  });
  it('Teste: Lados a e c iguais', () => {
    let triangulo = new Triangulo(7, 10, 7)
    assert.equal(triangulo.tipo(), "Isosceles");
  });
});

describe('Verificando se os tamanhos lados são válidos', () => {
  it('Teste: Lado com valor que viola validade do triângulo ', () => {
    let triangulo = new Triangulo(100, 10, 10)
    assert.equal(triangulo.valido(), false);
  });
});

describe('Verificando se é acutangulo', () => {
  it('Teste: Menor angulo nos lados A e B', () => {
    let triangulo = new Triangulo(7, 7, 5)
    assert.equal(triangulo.tipoAngulo(), "Acutangulo");
  });
  it('Teste: Menor angulo nos lados B e C', () => {
    let triangulo = new Triangulo(4, 7, 7)
    assert.equal(triangulo.tipoAngulo(), "Acutangulo");
  });
  it('Teste: Menor angulo nos lados A e C', () => {
    let triangulo = new Triangulo(7, 4, 7)
    assert.equal(triangulo.tipoAngulo(), "Acutangulo");
  });
});

describe('Verificando se é obtusangulo', () => {
  it('Teste: Maior angulo nos lados A e B', () => {
    let triangulo = new Triangulo(4, 5, 7)
    assert.equal(triangulo.tipoAngulo(), "Obtusangulo");
  });
  it('Teste: Menor angulo nos lados B e C', () => {
    let triangulo = new Triangulo(7, 4, 5)
    assert.equal(triangulo.tipoAngulo(), "Obtusangulo");
  });
  it('Teste: Menor angulo nos lados A e C', () => {
    let triangulo = new Triangulo(4, 7, 5)
    assert.equal(triangulo.tipoAngulo(), "Obtusangulo");
  });
});

describe('Verificando se é retangulo', () => {
  it('Teste: Maior angulo nos lados A e B', () => {
    let triangulo = new Triangulo(3, 4, 5)
    assert.equal(triangulo.tipoAngulo(), "Retangulo");
  });
  it('Teste: Menor angulo nos lados B e C', () => {
    let triangulo = new Triangulo(5, 4, 3)
    assert.equal(triangulo.tipoAngulo(), "Retangulo");
  });
  it('Teste: Menor angulo nos lados A e C', () => {
    let triangulo = new Triangulo(3, 5, 4)
    assert.equal(triangulo.tipoAngulo(), "Retangulo");
  });
});
