const fs = require('fs');

const START = 10000;
const END = 100000;
const FILENAME = 'result.txt';

function generateFizzBuzz(start, end) {
  const result = new Array(end - start + 1);
  let index = 0;

  for (let num = start; num <= end; num++) {
    let value = '';
    if (num % 3 === 0) value += 'fizz';
    if (num % 5 === 0) value += 'buzz';
    result[index++] = value || num;
  }

  return result.join('\n'); // Объединяем в строку для быстрой записи
}

function writeToFile(filename, content) {
  fs.writeFileSync(filename, content, 'utf8');
  console.log(`Файл "${filename}" успешно создан.`);
}

writeToFile(FILENAME, generateFizzBuzz(START, END));
