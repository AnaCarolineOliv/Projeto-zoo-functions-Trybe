const { species, employees } = require('../data/zoo_data');

// const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
// const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
// const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
const animalId = (param) => employees
  .find((employe) =>
    employe.id === param).responsibleFor[0];

const getOldestFromFirstSpecies = (id) =>
  // seu código aqui
  Object.values(species
    .find((specie) => specie.id === animalId(id)).residents.sort((a, b) => b.age - a.age)[0]);

// console.log(animalId('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
// console.log(animalId(stephanieId));
// console.log(getOldestFromFirstSpecies(stephanieId));
module.exports = getOldestFromFirstSpecies;
