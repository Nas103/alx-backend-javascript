#!/usr/bin/env node
// 10-api/api.test.js
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api');

const { expect } = chai;

chai.use(chaiHttp);

describe('Index page', () => {
  it('should return status code 200', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should return the correct message', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  });

  it('should return content-type as text/plain', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.header('content-type', 'text/plain; charset=utf-8');
        done();
      });
  });
});

describe('Cart page', () => {
  it('should return status code 200 when :id is a number', (done) => {
    chai.request(app)
      .get('/cart/12')  // Using a valid number for cart ID
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Payment methods for cart 12');
        done();
      });
  });

  it('should return status code 404 when :id is NOT a number', (done) => {
    chai.request(app)
      .get('/cart/hello')  // Using an invalid non-numeric ID
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.text).to.equal('Not Found');
        done();
      });
  });
});

describe('Available Payments', () => {
  it('should return status code 200 and correct structure for /available_payments', (done) => {
    chai.request(app)
      .get('/available_payments')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        });
        done();
      });
  });
});

describe('Login', () => {
  it('should return status code 200 and correct message when userName is provided', (done) => {
    chai.request(app)
      .post('/login')
      .send({ userName: 'Betty' })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Welcome Betty');
        done();
      });
  });

  it('should return status code 400 if userName is not provided', (done) => {
    chai.request(app)
      .post('/login')
      .send({})
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.text).to.equal('Bad request');
        done();
      });
  });
});
