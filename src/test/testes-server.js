const chai = require('chai')
  , chaiHttp = require('chai-http');
  chai.use(chaiHttp);
const expect = chai.expect;
let should = chai.should();

const app = require('../server');

describe('Verificando se transforma C em F', () => {
  it('deveria transforma C em F', (done) => {
    chai.request(app)
      .get('/converterTemperatura?valor=30&de=C&para=F')
      .end((err, res) => {
        console.log(typeof res.body)
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('valor', 86);
        done();
      });
  });
});

describe('Verificando se transforma F em C', () => {
  it('deveria transforma F em C', (done) => {
    chai.request(app)
      .get('/converterTemperatura?valor=86&de=F&para=C')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('valor', 30);
        done();
      });
  });
});

describe('Verificando se transforma C em C', () => {
  it('deveria transforma C em C', (done) => {
    chai.request(app)
      .get('/converterTemperatura?valor=30&de=C&para=C')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('valor', 30);
        done();
      });
  });
});

describe('Verificando se transforma F em F', () => {
  it('deveria transforma F em F', (done) => {
    chai.request(app)
      .get('/converterTemperatura?valor=30&de=F&para=F')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('valor', 30);
        done();
      });
  });
});

describe('Verificando se parametro eh valido', () => {
  it('deveria retornar erro no valor', (done) => {
    chai.request(app)
      .get('/converterTemperatura?valor=ABACATE&de=F&para=F')
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('wrongValue', 'valor');
        done();
      });
  });
  it('deveria retornar erro no "de"', (done) => {
    chai.request(app)
      .get('/converterTemperatura?valor=30&de=ABACATE&para=F')
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('wrongValue', 'de');
        done();
      });
  });
  it('deveria retornar erro no "para"', (done) => {
    chai.request(app)
      .get('/converterTemperatura?valor=30&de=F&para=ABACATE')
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('wrongValue', 'para');
        done();
      });
  });
});

describe('Verificando se retonar erro com requisição sem parâmetro', () => {
  it('deveria retornar status 400 e parametro "para" que faltou', (done) => {
    chai.request(app)
      .get('/converterTemperatura?valor=30&de=C')
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('missing', 'para');
        done();
      });
  });
  it('deveria retornar status 400 e parametro "de" que faltou', (done) => {
    chai.request(app)
      .get('/converterTemperatura?valor=30&para=C')
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('missing', 'de');
        done();
      });
  });
  it('deveria retornar status 400 e parametro que faltou', (done) => {
    chai.request(app)
      .get('/converterTemperatura?de=F&para=C')
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('missing', 'valor');
        done();
      });
  });
});