const fs = require('fs');

const START = 10000;
const END = 100000;
const FILENAME = 'result2.txt';

function FizzBuzz(start, end) {
  const result = new Array(end - start + 1);
  let mod3 = (start - 1) % 3;
  let mod5 = (start - 1) % 5;

  for (let i = start, j = 0; i <= end; i++, j++) {
    mod3++;
    mod5++;

    let value = '';
    if (mod3 === 3) {
      value += 'fizz';
      mod3 = 0;
    }
    if (mod5 === 5) {
      value += 'buzz';
      mod5 = 0;
    }

    result[j] = value || i;
  }

  return result.join('\n');
}

fs.writeFileSync(FILENAME, FizzBuzz(START, END), 'utf8');
console.log(`Файл "${FILENAME}" успешно создан.`);
