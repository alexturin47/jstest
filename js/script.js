let budget,
		shopName,
		time,
		price

// function start () {
// 	budget = prompt("Ваш бюджет?");

// 	while (isNaN(budget) || budget == "" || budget == null) {
// 		budget = prompt("Ваш бюджет?");
// 	}

// 	shopName = prompt("Название вашего магазина").toUpperCase(); 
// 	time = 21;
// }

// start();

var employer = {
	number: 1,
	name: ""
}

var mainList = {
	budget: 0,
	shopName: "",
	shopGoods: [],
	employers: [],
	open: true,
	discount: false
}

// mainList.budget = budget;
// mainList.shopName = shopName;

// function chooseGoods(){
// 	for (var i = 0; i <= 5; i++) {
// 		let a = prompt("Какой тип товаров будем продавать?");

// 		if ((typeof(a)) === 'string' &&  ((typeof(a)) != null) &&  a != '' && a.length < 50 ) {
// 			console.log('Все верно');
// 			mainList.shopGoods[i] = a;
// 			} else {
// 					i = i -1;
// 				};
// 			console.log(a);
// 		}
// }

// chooseGoods();

// function workTime (time) {
// 	if ( time < 0 ) {
// 		console.log('Такого не может быть');
// 		} else if ( time > 0 && time < 20){
// 				console.log('Время работать');
// 			} else if ( time < 24){
// 					console.log('Уже слишком поздно');
// 				} else {
// 						console.log('В сутках только 24 часа');
// 					} 
// }

// function calcDayBudget (budget) {
// 	alert("Бюджет на 1 день = " + budget / 30 ); 
// }

// calcDayBudget(mainList.budget);

// function setDiscount (disc) {
// 	if (disc === true) {
// 		price = price * 0.8;
// 	} 
// }

function getEmployers () {
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
}

getEmployers();

console.log(mainList.employers);


