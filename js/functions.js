// Функция 1  проверки длины строки
const controlStringLenght = (str,length)=>str.length <= length;

// Функция 2  для проверки, является ли строка палиндромом.
const checkPalindrome = (string) => {
  const totalString = string.toLowerCase().replaceAll(' ', '');
  const revString = totalString.split('');
  const reverseStr = revString.reverse().join('');

  //const reverseString = totalString.split('').reverse().join('');

  return totalString === reverseStr;
};
//проверка 1 функции
console.log(controlStringLenght('проверяемая строка', 20));
console.log(controlStringLenght('проверяемая строка', 18));
console.log(controlStringLenght('проверяемая строка', 10));

//проверка 2 функции
console.log(checkPalindrome('топот'));
console.log(checkPalindrome('Лёша на полке клопа нашёл '));
console.log(checkPalindrome('кекс'));
