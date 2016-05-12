function getSum(arr) {
  var sum = arr[0] + arr[1];

  return sum;
};

/* file io */
var fs = require('fs');

function readTwoNumbersAsLine(input) {
  return input.split(' ').map(function (el) {
    return parseFloat(el);
  });
};

function readTwoNumbersAsLines(input) {
  return input.split('\n').map(function (el) {
    return parseFloat(el);
  });
};

var answer;

fs.readFile('twonumbers.txt', 'utf8', function (err, contents) {
  var numbers = readTwoNumbersAsLine(contents);
  answer = getSum(numbers);

  fs.writeFile('output.txt', answer, function (err) {
    console.log(answer);
  });
});
