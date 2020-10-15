const countPrimeNumbers = () => {
    let prime = [];
    for (let y = 2; y < 100; y++) {
      if (y % 2 != 0)
        prime.push(y);
    }
    return prime;
  }
  
  let start = window.performance.now();
  countPrimeNumbers();
  let finish = window.performance.now();
  
  console.log(`Execution time of printing countPrimeNumbers was ${finish - start} miliseconds`);
  