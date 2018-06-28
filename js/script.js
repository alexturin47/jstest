var budget = +prompt("Ваш бюджет?", "0");
var shopName = prompt("Название вашего магазина", "");

var mainList = {
	budget: 0,
	shopName: "",
	shopGoods: [],
	employers: {
		name: "",
		title: ""
	},
	open: true
}
mainList.budget = budget;
mainList.shopName = shopName;
for (var i = 0; i <= 2; i++) {
	mainList.shopGoods[i] = prompt("Какой тип товаров будем продавать?", "");
}

alert("Бюджет на 1 день = " + mainList.budget / 30 );

console.log(mainList.shopGoods);
