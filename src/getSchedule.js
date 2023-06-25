const data = require('../data/zoo_data');

// Retorne um objeto com todos os horários disponíveis para cada dia da semana caso a função não receba parâmetro ou o parâmetro passado para a função não seja um animal ou um dia.
const animalsAndOfficeHours = {
  Tuesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
  },
  Wednesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
  },
  Thursday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'],
  },
  Friday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes'],
  },
  Saturday: {
    officeHour: 'Open from 8am until 10pm',
    exhibition: [
      'lions', 'tigers',
      'bears', 'penguins',
      'otters', 'frogs',
      'snakes', 'elephants',
    ],
  },
  Sunday: {
    officeHour: 'Open from 8am until 8pm',
    exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants'],
  },
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};

// Retorne um array com os dias da semana caso seja um animal:
const isAnimal = (param) =>
  data.species.some(({ name }) => name === param);
// data.species.find((specie) =>
//   ((specie === param) ? specie.availability : undefined));

// caso receba um único dia por parâmetro, deverá retornar os horários para aquele dia e quais animais estarão disponíveis.
const isWeekDay = (param) =>
  Object.keys(animalsAndOfficeHours).some((weekDay) => weekDay === param);

const getSchedule = (scheduleTarget) => {
  if (isWeekDay(scheduleTarget)) {
    return {
      [scheduleTarget]: animalsAndOfficeHours[scheduleTarget],
    };
  }
  if (isAnimal(scheduleTarget)) {
    return data.species.find((specie) => specie.name === scheduleTarget).availability;
  }
  return animalsAndOfficeHours;
};

// console.log(getSchedule());
// console.log(getSchedule('Thursday'));
// console.log(getSchedule('lions'));
// console.log(isAnimal('lions'));

module.exports = getSchedule;
