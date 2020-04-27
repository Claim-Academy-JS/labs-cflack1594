const longWord = new String("antidisestablishmentarianism");
const shortWord = new String("janky");
const palWord = new String("Racecar");
const vowels = ["a", "e", "i", "o", "u"];

function countVowels(wordIn) {
  let vowelCount = 0;
  wordIn = wordIn.toLowerCase();

  for (let i in wordIn) {
    if (vowels.includes(wordIn.charAt(i))) vowelCount++;
  }

  return `${wordIn} has ${vowelCount} vowels`;
}

function palindrome(wordIn) {
  wordIn = wordIn.toLowerCase();

  for (let i = 0; i < wordIn.length; i++) {
    if (!(wordIn.charAt(i) === wordIn.charAt(wordIn.length - 1) - i))
      return `${wordIn} is not a palindrome`;
  }

  return `${wordIn} is a palindrome`;
}

console.log(countVowels(longWord));
console.log(palindrome(shortWord));
console.log(palindrome(palWord));
