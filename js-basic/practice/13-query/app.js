// Написать функцию, которая принимает объект query параметров и возвращает строку для вставки:
// {
//     search: ‘Вася’,
//     take: 10,
// }

// search=Вася&take=10

// Нужно итерироваться по объекту и ключ == ключ, значение == параметр, собирать все в строку и возвращать ее

const obj = {
  search: 'Вася',
  take: 10,
  auth: false
}

const getPath = (obj) => {
  const keys = Object.keys(obj);
  let result = '';
  let index = 0

  for (key of keys) {
    if (index === keys.length - 1) {
      result += `${key}=${obj[key]}`
    }
    else {
      result += `${key}=${obj[key]}&`
    }
    index++
  }
  
  return result
}

console.log(getPath(obj));