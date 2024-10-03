const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToAp', function() {
  beforeEach(function() {
    sinon.spy(console, "log");
  });
  afterEach(function() {
    sinon.restore();
  });
  it("with 100 and 20", function() {
    sendPaymentRequestToApi(100, 20);
    expect(console.log.calledOnce).to.be.true;
    expect(console.log.callCount).to.be.equal(1);
    expect(console.log.calledWith('The total is: 120')).to.be.true;
  });
  it("with 10 and 20", function() {
    sendPaymentRequestToApi(10, 10);
    expect(console.log.calledOnce).to.be.true;
    expect(console.log.callCount).to.be.equal(1);
    expect(console.log.calledWith('The total is: 20')).to.be.true;
  });
});