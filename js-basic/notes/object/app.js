const users = [ 
  {name: 'Вася', age: 30}, 
  {name: 'Катя', age: 18},  
  {name: 'Аня', age: 40},  
  {name: 'Петя', age: 25}
];

console.log(users.sort((user1, user2) => {
  return user1.age - user2.age
}))

// Создать новую версию объекта с полями: полное имя (имя и фамилия), количество скиллов. Поле возраст нужно исключить.
const users2 = [
    { name: 'Вася', surname: 'Пупкин', age: 30, skills: ['Разработка', 'DevOps'] },
    { name: 'Катя', age: 18, surname: 'Белова', skills: ['Дизайн'] },
];

const newUsers = users2.map((user) => {
  return {
    fullName: user.name + ' ' + user.surname,
    skills: user.skills.length,
  }
})
console.log(newUsers);