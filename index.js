function Person(fName, lName, gender) {
  this.fName = fName;
  this.lName = lName;
  this.gender = gender;
}

function getNameTag(person) {
  if (person.gender === "m") return `Mr. ${person.fName} ${person.lName}`;
  if (person.gender === "f") return `Ms. ${person.fName} ${person.lName}`;
}

function abrFNameTag(person) {
  if (person.gender === "m")
    return `Mr. ${person.fName.charAt(0)}. ${person.lName}`;
  if (person.gender === "f")
    return `Ms. ${person.fName.charAt(0)}. ${person.lName}`;
}

function lastFirstName(person) {
  return `${person.lName} ${person.fName.charAt(0)}`;
}

const me = new Person("Connor", "Flack", "m");

console.log(getNameTag(me));
console.log(getNameTag(me).toUpperCase());
console.log(getNameTag(me).toLowerCase());
console.log(abrFNameTag(me));
console.log(lastFirstName(me));
