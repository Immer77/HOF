const persons = [
    {name: "Peter", alder: 25, tlf: 61540326},
    {name: "Johan", alder: 28, tlf: 22120326},
    {name: "Oskar", alder: 27, tlf: 21231333},
    {name: "Rasmus", alder: 35, tlf: 12312312}
]

console.log(persons);
console.log(persons.find(p => p.tlf === 12312312));

// Find mindste alder:
console.log(persons.reduce((acc, element) => acc > element.alder ? element : acc ,persons[0].alder));

// Modificer array
console.log(persons.forEach((e, i) => e.id = i += 1));
console.log(persons);

// Generer en tekststreng
//let getNavne = (person) => person.name;
//const navne = persons.map(getNavne);

console.log(persons.map((person) => person.name).sort((a,b) => a < b ? -1 : 1).reduce((a,b) => a+`,${b}`));

//Generer et array med navn og tlf
console.log(persons.filter((person) => person.alder<30).map((p) => ({name:p.name, tlf:p.tlf})));


// Opgave 8.2
function compareSort(compare){
    return compare = (a,b) => a < b ? -1 : 1;
}

