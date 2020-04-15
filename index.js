/*

1. Update the example above so that it *returns* a *string* like so, **`The total of the numbers is:`.
2. Write another *function* that takes in an *array* of numbers. This one *invokes* `sumDaNumbers`  and uses that *return value* to calculate the average (HINT: Use `length`).
3. Update your *function* so that if there are any 'non-numbers' in the *array,* they are 'skipped.' (HINT: you could use `[continue](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue)`).
4. Update your *function* so that `if` there are 'non-strings' involved, it adds that count to the `return`.

*/

// Sum the numbers in this ARRAY.
const nums = [51, 22, 33, 44, 511, 65, 7, 8, 9, 10];
let nonNumCount = 0;

function sumDaNumbers(nums) {
  let total = 0;

  for (let i = 0; i < nums.length; i++) {
    if (typeof nums[i] === "number") {
      total += nums[i];
    } else {
      nonNumCount++;
    }
  }

  return total;
}

function getAverage(nums) {
  let average = 0,
    tempTotal = 0;

  tempTotal = sumDaNumbers(nums);
  average = tempTotal / (nums.length - nonNumCount);

  return average;
}

function makeString(...args) {
  let outputString = "";

  for (let i = 0; i < args.length; i++) {
    outputString += args[i];
  }

  return outputString;
}

const totalOfNums = sumDaNumbers(nums);
const averageOfNums = getAverage(nums);

const totalOfNumsString = makeString(
  `The total is: `,
  totalOfNums,
  `
The average is: `,
  averageOfNums,
  `
The number of non number variables is: `,
  nonNumCount
);

console.log(totalOfNums);
console.log(averageOfNums);
console.log(totalOfNumsString);
