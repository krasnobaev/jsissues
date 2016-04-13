function ExportModule() {}

/*************************************/
var Ship = (function () {
  'use strict';

  class Ship {
    constructor (start, l, d) {
      if (!start) {
        throw 'Ship start point is not defined';
      }
      if (!start.hasOwnProperty('x') || !start.hasOwnProperty('y')) {
        throw 'start point format is not correct';
      }
      if (typeof d === 'undefined') {
        d = undefined;
      } else if (d !== 'down' && d !== 'right') {
        throw 'incorrect direction';
      }

      this.start = start;
      this.length = (l) ? l : 1;
      this.direction = d;
    }

    belongs (x, y) {
      return (this.direction === 'down') ?
          this.start.x === x &&
              y - this.start.y < this.length && y - this.start.y >= 0 :
          this.start.y === y &&
              x - this.start.x < this.length && x - this.start.x >= 0;
    }
  }

  return Ship;
})();

function validateBattlefield(aField) {
  'use strict';

  var Ships;

  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      if (aField[i][j] === 1) {
        var oShip = new Ship({x: i, y: j});
        if (aField[i + 1][j] === 1 && aField[i][j + 1] === 1) {
          console.error('cross ship detected');
          return false;
        }

        var k = 1;
        if (aField[i + k][j] === 1) {
          oShip.direction = 'down';
          while (aField[i + k][j] === 1) {
            k++;
            oShip.length++;
          }
        } else if (aField[i][j + k] === 1) {
          oShip.direction = 'right';
          while (aField[i][j + k] === 1) {
            k++;
            oShip.length++;
          }
        }
        if (oShip.length > 4) {
          console.error('extra sized ship detected');
          return false;
        }

        Ships.push(oShip);
      }
    }
  }
  return true;
};
/*************************************/

ExportModule.prototype.validateBattlefield = validateBattlefield;
ExportModule.prototype.Ship = Ship;
module.exports = ExportModule;
