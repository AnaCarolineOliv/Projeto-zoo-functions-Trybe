const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  return data.employees
    .find((employe) => employe.firstName === employeeName || employe.lastName === employeeName);
};

// const getEmployeeByName = (employeeName) => employeeName === undefined ? [{}] : data.employees
//     .find((employe) => employe.firstName === employeeName || employe.lastName === employeeName);

console.log(getEmployeeByName('Nelson'));
module.exports = getEmployeeByName;
