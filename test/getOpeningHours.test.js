const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  test('Verifica se a função getOpeningHours existe', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
  test('A função getOpeningHours retorna corretamente quando não é definido o argumento', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  test('A função retorna o esperado', () => {
    const zooClosed = 'The zoo is closed';
    expect(getOpeningHours('Tuesday', '11:27-AM')).toEqual('The zoo is open');
    expect(getOpeningHours('Tuesday', '1:27-AM')).toEqual(zooClosed);
    expect(getOpeningHours('monday', '1:27-AM')).toEqual(zooClosed);
    expect(getOpeningHours('monday', '12:00-AM')).toEqual(zooClosed);
  });
  test('lança erro no caso de semana seja iválida', () => {
    expect(() => {
      getOpeningHours('segunda');
    }).toThrow('The day must be valid. Example: Monday');
    expect(() => {
      getOpeningHours('Wednesday', '13:00');
    }).toThrow('The abbreviation must be \'AM\' or \'PM\'');
    expect(() => {
      getOpeningHours('Wednesday', '13:00-PM');
    }).toThrow('The hour must be between 0 and 12');
    expect(() => {
      getOpeningHours('Wednesday', '11:70-PM');
    }).toThrow('The minutes must be between 0 and 59');
    expect(() => {
      getOpeningHours('Wednesday', 'doze');
    }).toThrow('The hour should represent a number');
  });
});
