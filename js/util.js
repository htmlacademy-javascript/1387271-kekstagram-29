const MESSAGE_SHOW_TIME = 5000;
const showMessage = (message) => {
  const messageContainer = document.createElement('div');
  messageContainer.style.zIndex = '100';
  messageContainer.style.position = 'absolute';
  messageContainer.style.left = '0';
  messageContainer.style.top = '0';
  messageContainer.style.right = '0';
  messageContainer.style.padding = '10px 3px';
  messageContainer.style.fontSize = '10px';
  messageContainer.style.textAlign = 'center';
  messageContainer.style.backgroundColor = 'red';

  messageContainer.textContent = message;

  document.body.append(messageContainer);

  setTimeout(() => {
    messageContainer.remove();
  }, MESSAGE_SHOW_TIME);
};

//генератор случайного числа в диапозоне:
const getRandomInteger = (x, y) => {
  const lower = Math.ceil(Math.min(x, y));
  const upper = Math.floor(Math.max(x, y));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
//генератор  уникального индентификатора
const generatorID = () =>{
  let lastID = 0;
  return () => {
    lastID += 1;
    return lastID;

  };
};
const generatorIDComment = generatorID();
//поиск случайного элемента в переданном массиве
const getRandomArrElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];
// Функция 1  проверки длины строки
const controlStringLenght = (str,length)=>str.length <= length;

export {getRandomArrElement,generatorIDComment,getRandomInteger,controlStringLenght,showMessage};
