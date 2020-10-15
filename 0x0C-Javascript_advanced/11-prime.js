const countPrimeNumbers = () => {
    let prime = [];
    for (let y = 2; y < 100; y++) {
      if (y % 2 != 0)
        prime.push(y);
    }
    return prime;
  }
  
  let time = 0
  setTimeout(() => console.log(`Execution time of calculating prime numbers 100 times was ${time} milliseconds.`), time);

  let start = window.performance.now();
  for (let y = 0; y < 100; y++) {
    countPrimeNumbers();
  }
  let finish = window.performance.now();
  time = finish - start;