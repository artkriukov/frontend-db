// Сделать объект склад с методами добавления на склад, поиска по складу товара и расчет веса

const warehouse = {
  goods: [],
  findGoodById: function (id) {
    return this.goods.find(g => g.id === id)
  },
  addGood: function (product) {
    const existedGood = this.findGoodById(product.id)
    if (existedGood) {
      console.log('Товар уже добавлен');
      return
    }
    this.goods.push( product )
  },
  getWeightKg: function () {
    return this.goods.reduce((acc, el) => {
      return acc += el.weight?.kg ? el.weight.kg : 0
    }, 0)
  },
};

/* Товары */
const car = {
  id: 1,
  weight: {
  kg: 1000
  },
  brand: 'Ford'
}

const chair = {
  id: 2,
  weight: {
  kg: 2
  }
}

const paper = {
  id: 3,
  color: 'red'
}

warehouse.addGood(paper)
warehouse.addGood(chair)
console.log(warehouse.goods);
console.log(warehouse.getWeightKg());
console.log(warehouse.findGoodById(3));