const data = require('../data/zoo_data');

// const entrants = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

const countEntrants = (entrants) => {
  // seu código aqui
  const entrantsForAge = {
    child: 0, adult: 0, senior: 0,
  };

  entrants.reduce((curr, entrant) => {
    if (entrant.age < 18) {
      entrantsForAge.child += 1;
    }
    if (entrant.age >= 18 && entrant.age < 50) {
      entrantsForAge.adult += 1;
    }
    if (entrant.age >= 50) {
      entrantsForAge.senior += 1;
    }
    return curr;
  }, entrantsForAge);
  return entrantsForAge;
};

const calculateEntry = (entrants) => {
  // seu código aqui
  const entrantsUndefined = typeof entrants === 'undefined';
  const { prices } = data;
  if (!entrantsUndefined) {
    const entrantsForEtary = countEntrants(entrants);
    const { adult, child, senior } = entrantsForEtary;

    const soma = prices.adult * adult + prices.child * child + prices.senior * senior;
    return soma;
  }
  return 0;
};

// console.log(countEntrants(entrants));
// console.log(calculateEntry());
module.exports = { calculateEntry, countEntrants };
