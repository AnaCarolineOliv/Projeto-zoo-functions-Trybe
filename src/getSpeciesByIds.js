const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  // seu código aqui
  // console.log(ids);
  if (ids.length === 0) {
    return [];
  }
  const species = data.species.filter((specie) => ids.some((id) => id === specie.id));

  return species;
};
// Entendo como funciona:
// return species.map((population) => {
//   console.log(population.id);
//   return population.id === ids;
// });

// console.log(getSpeciesByIds('e8481c1d-42ea-4610-8e11-1752cfc05a46'));
// console.log(getSpeciesByIds());
module.exports = getSpeciesByIds;
