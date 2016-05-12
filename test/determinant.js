var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var mod = require('../src/determinant.js');
var mod = new mod;

describe('matrix grade 1', function () {
  it('', function () {
    expect(mod.determinant([
      [1],
    ])).to.equal(1);
  });
});

describe('matrix grade 2', function () {
  it('', function () {
    expect(mod.determinant([
      [1, 2],
      [3, 4],
    ])).to.equal(-2);
  });

  it('', function () {
    expect(mod.determinant([
      [0, 0],
      [1, 1],
    ])).to.equal(0);
  });
});

describe('matrix grade 3', function () {
  it('', function () {
    expect(mod.determinant([
      [2, 5, 3],
      [1, -2, -1],
      [1, 3, 4],
    ])).to.equal(-20);
  });
});

describe('matrix grade 4', function () {
  it('', function () {
    expect(mod.determinant([
      [1, 2, 3, 4],
      [5, 6, 1, 8],
      [9, 8, 7, 6],
      [5, 4, 7, 1],
    ])).to.equal(60);
  });
});
