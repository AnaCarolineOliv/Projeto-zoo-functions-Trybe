const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('Verifica se a funçãoexiste', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  test('A função retorna corretamente quando não é definido o argumento, ou não é string', () => {
    expect(handlerElephants()).toBe(undefined);
    expect(handlerElephants(7)).toEqual('Parâmetro inválido, é necessário uma string');
  });
  test('A função retorna corretamente quando é um argumento ou propriedade de dos elephants', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
    expect(handlerElephants('averageAge')).toEqual(10.5);
    expect(handlerElephants('count')).toEqual(4);
    expect(handlerElephants('location')).toEqual('NW');
  });
  test('A função retorna null quando a string não é uma propriedade, nem um argumento', () => {
    expect(handlerElephants('peso')).toBe(null);
  });
});
