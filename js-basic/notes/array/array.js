const roles = ['admin', 'user', 'developer']
const joinRoles = roles.join('-')
console.log(joinRoles);

const url = 'auth/user/login'
const splitUrl = url.split('/')
console.log(splitUrl);

// Деструктаризация
const userData = ['Artem', 25, 'NN', 'Russia']
const [userName, age, _, country] = userData
console.log(userName, age, country);

// Rest
const data = [1, 2, 3, 4, 5, 6, 7]
const [one, two, ...others] = data
console.log(others);