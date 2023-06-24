const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('Verifica se a função HandlerElephants existe', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  test('A função handlerElephants retorna corretamente quando não é definido o argumento, ou não é string', () => {
    expect(handlerElephants()).toBe(undefined);
    expect(handlerElephants(7)).toEqual('Parâmetro inválido, é necessário uma string');
  });
  test('A função handlerElephants retorna corretamente', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
    expect(handlerElephants('averageAge')).toBe(10.5);
    expect(handlerElephants('count')).toEqual(4);
  });
});
