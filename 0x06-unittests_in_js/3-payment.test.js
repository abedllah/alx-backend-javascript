const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToAp', function() {
  beforeEach(function() {
    sinon.spy(Utils, 'calculateNumber');
  });
  afterEach(function() {
    sinon.restore();
  });
  it("validate the usage of the `Utils.calculateNumber` function", function() {
    sendPaymentRequestToApi(100, 20);
    expect(Utils.calculateNumber.called).to.be.true;
    expect(Utils.calculateNumber.calledOnce).to.be.true;
    expect(Utils.calculateNumber.callCount).to.be.equal(1);
    expect(Utils.calculateNumber.firstCall.args[0]).to.equal("SUM");
    expect(Utils.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
  });
});