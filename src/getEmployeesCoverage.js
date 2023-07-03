const { employees, species } = require('../data/zoo_data');

// const lionId = '0938aa23-f153-4937-9f88-4858b24d6bce';
// // const ottersId = '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae';
// // const elephantsId = 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5';
// // const snakesId = '78460a91-f4da-4dea-a469-86fd2b8ccc84';
// // const frogsId = '89be95b3-47e4-4c5b-b687-1fabf2afa274';
// // const bearsId = 'baa6e93a-f295-44e7-8f70-2bcdc6f6948d';
// const tigersId = 'e8481c1d-42ea-4610-8e11-1752cfc05a46';

const idIsValid = (id) => employees.some((employe) => employe.id === id);
const nameIsValid = (name) => employees
  .some((employe) => employe.firstName === name || employe.lastName === name);

const getAnimalsInfos = ([...ids], param) => {
  const animals = species.filter((specie) => ids.some((id) => id === specie.id));
  if (ids.length === 0) {
    return [];
  }
  if (param === 'location') {
    return animals.map((animal) => animal.location);
  }

  return animals.map((animal) => animal.name);
};

const employeFormat = () =>
  employees.map((employe) => ({
    id: `${employe.id}`,
    fullName: `${employe.firstName} ${employe.lastName}`,
    species: getAnimalsInfos(employe.responsibleFor),
    locations: getAnimalsInfos(employe.responsibleFor, 'location') }));

const getEmploye = (idOrName) => {
  if (idIsValid(idOrName.id)) {
    return employeFormat()
      .find((employe) =>
        employe.id === idOrName.id);
  } if (nameIsValid(idOrName.name)) {
    const employeByName = employeFormat()
      .find((employe) =>
        employe.fullName.includes(idOrName.name));
    return employeByName;
  }
  throw new Error('Informações inválidas');
};

const getEmployeesCoverage = (idOrName) => {
  const undParam = idOrName === undefined;

  if (!undParam) {
    const employe = getEmploye(idOrName);
    return employe;
  }
  const obj = employeFormat();
  return obj;
};

// console.log(nameIsValid('Nigel'));
// console.log(getAnimalsInfos([lionId, tigersId]));
// console.log(getEmployeesCoverage('c5b83cb3-a451-49e2-ac45-ff3f54fbe71'));
// console.log(getEmployeesCoverage({ id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1' }));
// console.log(getEmployeesCoverage({ name: 'Spry' }));
// console.log(getEmployeesCoverage({ name: 'Sharonda' }));
// console.log(getEmploye({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' }));
console.log(getEmployeesCoverage());
// erro
// console.log(getEmployeesCoverage({ id: 'ce1' }));

module.exports = getEmployeesCoverage;
