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
for (var i = 0; i <= 5; i++) {
	let a = prompt("Какой тип товаров будем продавать?");

	if ((typeof(a)) === 'string' && a != '' && a.length < 50 ) {
		console.log('Все верно');
		mainList.shopGoods[i] = a;
		} else if ((typeof(a)) != null) {
				--i;
			};
		console.log(a);
	}

alert("Бюджет на 1 день = " + mainList.budget / 30 );

console.log(mainList.shopGoods);
