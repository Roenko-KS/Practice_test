const fs = require('fs');

//Используем алгоритм решето Эратосфена
function sieve(limit) {
  const primes = new Uint8Array(limit + 1).fill(1);
  primes[0] = primes[1] = 0; // 0 и 1 не являются простыми

  for (let i = 2; i * i <= limit; i++) {
    if (primes[i]) {
      for (let j = i * i; j <= limit; j += i) {
        primes[j] = 0; // Число j составное
      }
    }
  }

  return primes;
}

function getPrimesInRange(start, end) {
  const primes = sieve(end);
  return Array.from({ length: end - start + 1 }, (_, i) => start + i).filter(
    (n) => primes[n]
  );
}

function writeToFile(filename, numbers) {
  try {
    fs.writeFileSync(filename, numbers.join('\n'), 'utf8');
    console.log(`Файл "${filename}" успешно создан.`);
  } catch (error) {
    console.error(`Ошибка записи в файл: ${error.message}`);
  }
}

const START = 10000;
const END = 100000;
const FILENAME = 'num.txt';

const primes = getPrimesInRange(START, END);
writeToFile(FILENAME, primes);
