const data = {
	"displayedName": {
		"displayedName": {
			"value": [
				"Профиль маячковый ПВХ 10 мм L3м"
			],
			"description": "Полное наименование товара для клиента"
		}
	},
	"stock": {
		"stocks": {
			"34": {
				"2": "35",
				"3": "42",
				"4": "58",
				"5": "57",
				"6": "112",
				"20": "51",
				"22": "78",
				"26": "34",
				"32": "22",
				"35": "358",
				"40": "28",
				"43": "68",
				"45": "58",
				"49": "31",
				"51": "29",
				"56": "42",
				"62": "26",
				"64": "0",
				"65": "57",
				"86": "15",
				"114": "41",
				"117": "46",
				"143": "46",
				"162": "4",
				"171": "0",
				"176": "12"
			}
		}
	}
}
// stocks - остатки товара в регионе,
// 34 - номер региона,
// 	2, 3, 4, ... 176 - номера магазинов региона,
// 	"2": "35" означает, что в магазине 2 товар в наличии в количестве 356 штук
// Необходимо написать на JavaScript три метода:

// 	1. получить название товара
const getGoodsName = data => {
	return data.displayedName.displayedName.value[0]
}

// 2. получить массив номеров магазинов, в которых есть товары в наличии
const goodsInStock = (data, regionNumber) => {
	const allGoods = data.stock.stocks[regionNumber]
	return Object.keys(allGoods).filter(store => allGoods[store] > 0)
}

// 3. найти максимальное количество товара в регионе, вернуть это количество и номер магазина
const maxQuantityOfGoodsInTheRegion = (data, regionNumber) => {
	const allGoods = data.stock.stocks[regionNumber]
	const maxQuantityOfGoods = getMaxOfArray(Object.values(allGoods))
	const storeWithMaxQuantity = Object.keys(allGoods).find(
		store => allGoods[store] == maxQuantityOfGoods
	)
	return {
		[storeWithMaxQuantity]: maxQuantityOfGoods
	}
}

const getMaxOfArray = array => {
	return Math.max.apply(null, array)
}

console.log('Название товара: ',getGoodsName(data))
console.log('Массив номеров магазинов, в которых есть товары в наличии: ', goodsInStock(data, '34'))
console.log('максимальное количество товара в регионе, его количество и номер магазина: ', maxQuantityOfGoodsInTheRegion(data, '34'))