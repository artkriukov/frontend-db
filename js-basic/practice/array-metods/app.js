// Преобразовать исходные данные в массив положительных дельт цен, т.е., разниц между ценой в момент y 
// и ценой в момент x для товаров, которые подорожали.
const prices = [[100, 150], [120, 100], [200, 300]]

const result = prices
  .map(product => product[1] - product[0])
  .filter(price => price > 0)

  console.log(result);

// Найти среднее значение последоватедьности чисел с помощью reduce
const arr = [1, 4, 4, 10];

const avg = arr.reduce((acc, value, i) => {
  if (i !== arr.length - 1) {
    return acc += value
  } else {
    return (acc += value) / arr.length
  }
}, 0)