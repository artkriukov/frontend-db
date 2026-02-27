// Реализация объекта "кошелек" с начальным балансом и возможностью управлять его состоянием через методы.
// Основные компоненты
// Объект "Кошелек": Содержит начальный баланс (balance) и массив операций (operations).
// Методы:
// increase(sum, reason): Увеличивает баланс на sum, добавляет операцию с reason в массив operations.
// Возвращает true.
// decrease(sum, reason): Уменьшает баланс на sum если достаточно средств, иначе возвращает false. 
// Добавляет операцию с reason в массив operations при успехе.
// getOperationLength(): Возвращает количество выполненных операций.

const wallet = {
  balance: 0,
  operations: [],

  increase: function(sum, reason) {
    this.balance += sum
    this.operations.push({sum, reason})
  },

  decrease: function(sum, reason) {
    if (this.balance >= sum) {
      this.balance -= sum
      this.operations.push({
        sum: -sum, 
        reason
      })
    } else {
      console.log('You dont have money');
    }
  },

  getOperationLength: function() {
    this.operations.length
  }
};

wallet.increase(100, 'Salary')
wallet.increase(200, 'FL')
wallet.decrease(50, 'product')

console.log(wallet.operations);