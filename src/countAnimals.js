const data = require('../data/zoo_data');

// const conter = () => {

// };

const countAnimals = (animal) => {
  const animalUndefined = typeof animal === 'undefined';
  const { species } = data;
  if (!animalUndefined) {
    const specieOfAnimal = data.species.find((specie) => specie.name === animal.species);
    if (typeof animal.sex !== 'undefined') {
      return specieOfAnimal.residents.filter((resident) => resident.sex === animal.sex).length;
    }
    return specieOfAnimal.residents.length;
  }
  return species.reduce((curr, specie) => {
    const { name, residents } = specie;
    const newCurr = {
      [`${name}`]: residents.length,
    };
    return { ...curr, ...newCurr };
  }, {});
};

// console.log(countAnimals({ species: 'lions', sex: 'female' }));
// countAnimals({ species: 'lions' });
// console.log(countAnimals());
// countAnimals();
module.exports = countAnimals;
