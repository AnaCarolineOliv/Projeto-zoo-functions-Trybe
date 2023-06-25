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
    // expect(getOpeningHours(7)).toEqual('Parâmetro inválido, é necessário uma string');
  });
});
