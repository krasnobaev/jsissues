var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getSum(n1, n2) {
  var sum = n1 + n2;

  return sum;
};

function readTwoNumbersAsLine() {
  rl.question('', function (x) {
    debugger;
    var numbers = x.split(' ').map(function (el) {
      return parseFloat(el);
    });

    var sum = getSum(numbers[0], numbers[1]);

    // console.log(sum.toString() + '\n');
    process.stdout.write(sum.toString() + '\n');
    rl.close();
  });
};

function readTwoNumbersAsLines() {
  rl.question('', function (x) {
    rl.question('', function (y) {
      var sum = getSum(parseFloat(x), parseFloat(y));

      // console.log(sum.toString() + '\n');
      process.stdout.write(sum.toString() + '\n');
      rl.close();
    });
  });
};

readTwoNumbersAsLine();
