// Задача: Написать функцию, определяющую, может ли пользователь позволить себе покупку 
// товара исходя из его финансов и возможности получения кредита.

// Условия:
// Пользователь хочет купить MacBook стоимостью $2000.
// Параметры пользователя: возраст, наличие работы, собственные деньги.

// Кредит:
// $500, если возраст > 24 года и есть работа.
// $100, если возраст > 24 года, работы нет.
// $0 в остальных случаях.

let userAge = 22
let isWorking = true
let userBalance = 1500
let macCost = 2000

function computeCredit(age, isWorking) {
  if (age > 24 && isWorking) {
    return 500
  } else if (age > 24) {
    return 100
  }

  return 0
}

function canBuy(productPrice, age, isWorking, userBalance) {
  let creditMoney = computeCredit(age, isWorking)
  let userMoney = userBalance + creditMoney
  
  return userMoney >= productPrice ? true : false
}

console.log(canBuy(macCost, userAge, isWorking, userBalance))