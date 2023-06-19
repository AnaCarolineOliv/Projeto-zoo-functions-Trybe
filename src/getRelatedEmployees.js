const data = require('../data/zoo_data');

// const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
// const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
// const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
// const managers = [stephanieId, olaId, burlId];

const isManager = (id) => data.employees
  .some((employe) => employe.managers
    .find((manager) => manager === id));

const getRelatedEmployees = (managerId) => {
  // seu código aqui
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const employees = data.employees
    .filter((employe) => employe.managers
      .every((manager) => manager === managerId));

  const relatedEmployees = employees.filter((employe) => employe.managers.length > 0);
  return relatedEmployees.map((employe) => `${employe.firstName} ${employe.lastName}`);
};

// getRelatedEmployees();
// console.log(getRelatedEmployees('fdb2543b-5662-46a7-badc-93d960fdc0a8'));
// console.log(getRelatedEmployees(stephanieId));
// console.log(getRelatedEmployees(olaId));
// console.log(getRelatedEmployees(burlId));
// getRelatedEmployees(stephanieId);

module.exports = { isManager, getRelatedEmployees };
