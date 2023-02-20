import Character from '../Character';

test('Generated Character class', () => {
  expect(new Character('Daemon', 'Daemon')).toEqual({
    name: 'Daemon',
    type: 'Daemon',
    health: 100,
    level: 1,
  });
});

test('Generated Character class', () => {
  expect(() => new Character('D', 'Daemon')).toThrowError(new Error('Длина переменной name должна быть от 2 до 10 символов'));
});

test('Generated Character class', () => {
  expect(() => new Character('Daemon', 666)).toThrowError(new Error('Некоректное значение, тип переменной не строка'));
});

test('Generated Character class', () => {
  expect(() => new Character(666, 'Daemon')).toThrowError(new Error('Некоректное значение, тип переменной не строка'));
});
