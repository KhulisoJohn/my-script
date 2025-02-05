const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const isPrime =(num) => {
  if (num < 2) return false; 
  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0){
        return false;
      }
  }
  return true;
}


const getPrimeNumbers = arr => arr.filter(isPrime);
console.log(getPrimeNumbers(array));