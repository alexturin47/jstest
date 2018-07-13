let budget,
		shopName,
		time,
		price

// function start () {
// 	budget = prompt("Ваш бюджет?");

// 	while (isNaN(budget) || budget == "" || budget == null) {
// 		budget = prompt("Ваш бюджет?");
// 	}

// 	shopName = prompt("Название вашего магазина", "").toUpperCase(); 
// 	time = 21;
// }

// start();

let employer = {
	number: 1,
	name: ""
}

let mainList = {
	budget: 0,
	shopName: "",
	shopGoods: [],
	employers: [],
	open: true,
	discount: false,
	shopItems: [],
	chooseGoods: function chooseGoods(){
								for (var i = 0; i <= 5; i++) {
									let a = prompt("Какой тип товаров будем продавать?");

									if ((typeof(a)) === 'string' &&  ((typeof(a)) != null) &&  a != '' && a.length < 50 ) {
										console.log('Все верно');
										mainList.shopGoods[i] = a;
										} else {
												i = i -1;
											};
										console.log(a);
									}
	},
	workTime: function workTime (time) {
							if ( time < 0 ) {
								console.log('Такого не может быть');
								} else if ( time > 0 && time < 20){
										console.log('Время работать');
										mainList.open = true;
									} else if ( time < 24){
											console.log('Уже слишком поздно');
										} else {
												console.log('В сутках только 24 часа');
											} 
	},
	calcDayBudget: function calcDayBudget (budget) {
										alert("Бюджет на 1 день = " + budget / 30 ); 
	},
	setDiscount: function setDiscount (disc) {
									if (disc === true) {
										price = price * 0.8;
									} 
	},
	getEmployers: function getEmployers () {
									for( let i = 0; i < 4; i++) {
										let empName = prompt('Имя сотрудника:');
										while ( empName === "" || empName === null || (typeof(empName)) != 'string' ) {
											empName = prompt('Имя сотрудника:');
										}
										employer = new Object();
										employer.name = empName;
										employer.number = i+1;
										console.log(employer);
										mainList.employers.push(employer);
										console.log(mainList.employers);	
									}
	},
	chooseShopItem: function chooseShopItem () {		
		let items = prompt("Перечислите через запятую ваши товары", "");
		mainList.shopItems = items.split(",");
		mainList.shopItems.push(prompt("Подождтите, еще ", ""));
		mainList.shopItems.sort();
	},
	listShopItem: function listShopItem () {
		mainList.shopItems.forEach(function(item,i,arr){
			console.log(item + ' ' + i);
		});
	}
}


mainList.chooseShopItem();
mainList.listShopItem();

console.log(mainList);


