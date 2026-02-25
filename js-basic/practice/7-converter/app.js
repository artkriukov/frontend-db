// Написать функцию, которая получает на вход 3 параметра:

// суммой средств - 1000
// валютой средств - руб
// целевой валютой - $
// Возвращает число в новой валюте, если конвертация поддерживается, или null, если нет.
// Ставки конвертации хранятся внутри функции.

const converter = (amount, fromCurrency, toCurrency) => {
  const exchangeRate = 30

  switch (fromCurrency) {
    case 'руб':
      return amount * exchangeRate
    default: 
      return null
  }
}

console.log(converter(1000, 'руб', 'usd'));