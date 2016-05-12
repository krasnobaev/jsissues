var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var mod = require('../src/battleship.js');
var mod = new mod;

var aBasicField = [[1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
                   [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
                   [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
                   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                   [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                   [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
                   [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                   [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
                   [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
                   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                  ];

var aEmptyField = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                  ];

describe('Ship', function () {
  it('should return true because point belongs to vertical biggest ship', function () {
    var oShip = new mod.Ship({x: 1, y: 1}, 4, 'down');

    expect(oShip.belongs(0, 0)).to.equal(false);
    expect(oShip.belongs(0, 1)).to.equal(false);
    expect(oShip.belongs(0, 2)).to.equal(false);
    expect(oShip.belongs(0, 3)).to.equal(false);
    expect(oShip.belongs(0, 4)).to.equal(false);
    expect(oShip.belongs(0, 5)).to.equal(false);

    expect(oShip.belongs(1, 0)).to.equal(false);
    expect(oShip.belongs(1, 1)).to.equal(true);
    expect(oShip.belongs(1, 2)).to.equal(true);
    expect(oShip.belongs(1, 3)).to.equal(true);
    expect(oShip.belongs(1, 4)).to.equal(true);
    expect(oShip.belongs(1, 5)).to.equal(false);

    expect(oShip.belongs(2, 0)).to.equal(false);
    expect(oShip.belongs(2, 1)).to.equal(false);
    expect(oShip.belongs(2, 2)).to.equal(false);
    expect(oShip.belongs(2, 3)).to.equal(false);
    expect(oShip.belongs(2, 4)).to.equal(false);
    expect(oShip.belongs(2, 5)).to.equal(false);
  });

  it('should return true because point belongs to horizontal biggest ship', function () {
    var oShip = new mod.Ship({x: 1, y: 1}, 4, 'right');

    expect(oShip.belongs(0, 0)).to.equal(false);
    expect(oShip.belongs(1, 0)).to.equal(false);
    expect(oShip.belongs(2, 0)).to.equal(false);
    expect(oShip.belongs(3, 0)).to.equal(false);
    expect(oShip.belongs(4, 0)).to.equal(false);
    expect(oShip.belongs(5, 0)).to.equal(false);

    expect(oShip.belongs(0, 1)).to.equal(false);
    expect(oShip.belongs(1, 1)).to.equal(true);
    expect(oShip.belongs(2, 1)).to.equal(true);
    expect(oShip.belongs(3, 1)).to.equal(true);
    expect(oShip.belongs(4, 1)).to.equal(true);
    expect(oShip.belongs(5, 1)).to.equal(false);

    expect(oShip.belongs(0, 2)).to.equal(false);
    expect(oShip.belongs(1, 2)).to.equal(false);
    expect(oShip.belongs(2, 2)).to.equal(false);
    expect(oShip.belongs(3, 2)).to.equal(false);
    expect(oShip.belongs(4, 2)).to.equal(false);
    expect(oShip.belongs(5, 2)).to.equal(false);
  });
});

describe('ExportModule', function () {
  it('should return false on empty', function () {
    var oExportModule = new mod.validateBattlefield();
    expect(mod.validateBattlefield(aEmptyField)).to.equal(false);
  });
});
