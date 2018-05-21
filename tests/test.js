const expect = require('chai').expect
const icowatchlistAPI = require('../index.js');
const ico = new icowatchlistAPI();

describe('getAll() test', function () {
  it('it should download all data as object without error', function () {
  	ico.getAll(function(err, data){
  		expect(err).to.be.a('boolean');
  		expect(err).to.be.equal(false);
  		expect(data).to.be.a('object');
  	})
  });
});

describe('getLive() test', function () {
  it('it should download all data for live ICO\'s as object without error', function () {
    ico.getLive(function(err, data){
      expect(err).to.be.a('boolean');
      expect(err).to.be.equal(false);
      expect(data).to.be.a('object');
    })
  });
});

describe('getUpcoming() test', function () {
  it('it should download all data for upcoming ICO\'s as object without error', function () {
    ico.getUpcoming(function(err, data){
      expect(err).to.be.a('boolean');
      expect(err).to.be.equal(false);
      expect(data).to.be.a('object');
    })
  });
});

describe('getFinished() test', function () {
  it('it should download all data for finished ICO\'s as object without error', function () {
    ico.getFinished(function(err, data){
      expect(err).to.be.a('boolean');
      expect(err).to.be.equal(false);
      expect(data).to.be.a('object');
    })
  });
});