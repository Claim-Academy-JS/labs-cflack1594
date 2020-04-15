function createFizzBuzz(fizzNum = 3, buzzNum = 5) {
  const fizzBuzzArr = [];

  for (let i = 1; i <= 100; i++) {
    if (i % fizzNum === 0 && i % buzzNum === 0) {
      fizzBuzzArr.push("Fizz");
    } else if (i % buzzNum === 0) {
      fizzBuzzArr.push("Buzz");
    } else if (i % fizzNum) {
      fizzBuzzArr.push("Fizz. Buzz");
    } else {
      fizzBuzzArr.push(i);
    }
  }

  return fizzBuzzArr;
}

const fizzBuzzResult = [];
fizzBuzzResult.push(createFizzBuzz(2, 6));

console.log(fizzBuzzResult);
