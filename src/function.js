const calculateAllPrimes = (number) => {
  // let primes = [];
  let primes = new Array(number + 1).fill(true);
  primes[0] = false;
  primes[1] = false
  // for (let i = 2; i < number; i++) {
  //   let prime = true;
  //   for (let j = 2; j < i; j++) {
  //     if (i % j === 0) {
  //       prime = false;
  //       break;
  //     }
  //   }
  //   if (prime) primes.push(i);
  // }
  // return primes;
  for(let i=2; i*i <= number; i++){
    if(primes[i] === true){
      for(let j= i*i; j<= number; j+= i){
        primes[j] = false;
      }
    }
  }
  let result = [];
  for(let i=2; i<=number; i++){
    if(primes[i])
    result.push(i);
  }
  return result;
};

export default calculateAllPrimes