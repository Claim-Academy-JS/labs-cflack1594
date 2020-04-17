//take birthday and calculate age in years
function numberOfDaysOld(birthday) {
  const bday = new Date(birthday);
  const now = new Date(Date.now());
  return msToDays(now - Date.parse(bday));
}

function calcYearsOld(dob) {
  const dobDate = new Date(dob);
  const nowDate = new Date();

  return nowDate.getFullYear() - dobDate.getFullYear();
}

function msToDays(ms) {
  return ms / 86400000;
}

const birthday = "April 29 1999";
const daysOld = numberOfDaysOld(birthday);
const yearsOld = calcYearsOld(birthday);

console.log(`You are ${daysOld.toFixed(0)} days old`);
console.log(`You are ${yearsOld.toFixed(0)} years old`);
