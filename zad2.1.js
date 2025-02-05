const fs = require('fs');

const START = 10000;
const END = 100000;
const FILENAME = 'result.txt';

function FizzBuzz(start, end) {
  const res = [];
  const rep = { 3: 'fizz', 5: 'buzz' };
  const divisors = [3, 5];

  for (let i = start; i <= end; i++) {
    let r = '';

    for (let d of divisors) {
      if (i % d === 0) {
        r += rep[d];
      }
    }

    res.push(r === '' ? i.toString() : r);
  }

  return res.join('\n');
}

function writeToFile(filename, content) {
  fs.writeFileSync(filename, content, 'utf8');
  console.log(`Файл "${filename}" успешно создан.`);
}

writeToFile(FILENAME, FizzBuzz(START, END));
