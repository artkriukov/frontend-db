// ForEach -> метод для итерации по элементам массива. Позволяет выполнять функцию на каждом элементе массива. 
// Может принимать дополнительный аргумент - сам массив. Пример использования включает вывод каждого элемента в консоль. 
// Важно, что forEach не возвращает новый массив и часто используется для создания "побочных эффектов".
const score = [5, 10, 22, 9]

// for (const [i, el] of score.entries()) {
//   console.log(`Раунд ${i + 1}: очки ${el}`);
// }

score.forEach((scoreEl, index) => {
  console.log(`Раунд ${index + 1}: очки ${scoreEl}`);
})


// map -> метод, который также итеррирует по каждому элементу массива, но в отличие от forEach, возвращает новый массив,
// созданный путем преобразования каждого элемента оригинального массива. Пример преобразования включает конвертацию 
// валюты с долларов в рубли.

const transactionInUSD = [10, -7, 20, -43, 101]
const transactionInRUB = transactionInUSD.map((transaction) => {
  return transaction * 60
})
console.log(transactionInUSD);
console.log(transactionInRUB);

// Filter
const operations = [100, 200, -100, -43, 32]

const positiveOperation = operations.filter(el => {
  return el > 0
})

console.log(positiveOperation);

// reduce
const bankOperations = [100, -2, -100, -43, 32]

const finalBalance = bankOperations.reduce((acc, operation) => {
  return acc += operation
}, 0)

console.log(finalBalance);