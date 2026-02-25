const userAnswer = prompt('Сколько будет 7 + или - 15?')

switch (true) {
  case userAnswer === 'Я не робот':
  case Number(userAnswer) === -8:
  case Number(userAnswer) === 22:
    console.log('Успех');
    break;
  default:
    console.log('Ты робот');
}