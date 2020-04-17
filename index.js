//take birthday and calculate age in days
function numberOfDaysOld(birthday) {
  const bday = new Date(birthday);
  const now = new Date(Date.now());
  return msToDays(now - Date.parse(bday));
}

function msToDays(ms) {
  return ms / 86400000;
}

const birthday = "April 29 1999";
const daysOld = numberOfDaysOld(birthday);

console.log(`You are ${daysOld} days old`);
