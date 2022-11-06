const employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа',
	'евГений', ' Дарья', ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'
];
const nameCourse = 'Базовый React';
const command = [];

employers.forEach(element => {
	if (element.length > 0 && element.trim() !== '') {
		command.push(element);
	}
});

command.forEach((element, index) => {
	command[index] = element.toLowerCase().trim();
	command[index] = command[index][0].toUpperCase() + command[index].slice(1);
});

const data = {
	cash: [3, 8, 3],
	react: ['JSX', 'components', 'props', 'state', 'hooks'],
	add: ['styled-components', 'firebase']
};

const calcCash = (own, ...arr) => {
	own = own || 0;
	const everyCash = arr[0];
	let total = own;
	for (let i = 0; i < everyCash.length; i++) {
		total += +everyCash[i];
	}
	return total;
};

const lesson = calcCash(null, data.cash);

const makeBusiness = (director, teacher, allModule, gang, course) => {
	teacher = teacher || 'Максим';
	const sumTech = data.react.concat(data.add, 'и другие');
	console.log(`Стартуем новый курс: "${course}". Владелец: ${director}, преподаватель: ${teacher}.` +
		` Всего уроков: ${allModule}. \nКоманда Академии: ${gang}`);
	console.log(`Первое что изучим будет ${data.react[0]}. Он очень похож на HTML!`);
	console.log(`Технологии которые мы изучим: `);
	console.log.apply(null, sumTech);

};

makeBusiness.apply(null, ['Артем', null, lesson, command, nameCourse]);