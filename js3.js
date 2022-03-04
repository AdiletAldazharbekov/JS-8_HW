// 3)	Используя метод map() напишите код, 
// который получает из массива строк новый массив, содержащий их длины

const arr3  = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
console.log(arr3)
const getItemLength = (arr) => arr.map(i =>i.length)
console.log(getItemLength(arr3))

