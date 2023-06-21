//константы
const PHOTO_COUNT = 25;
const MIN_LIKE = 15;
const MAX_LIKE = 200;
const NAMES = [
  'Алексей',
  'Василий',
  'Ольга',
  'Софья',
  'Людмила',
  'Сергей'];
const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const DESCRIPTION = [
  'Крутая фотка',
  'Супер отдых','Ура! Каникулы',
];

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

// конструктор создания сообщения для комментария
const createMessage = ()=>{
  if(getRandomInteger(1,2) === 1){
    return getRandomArrElement(MESSAGE);
  }
  return `${getRandomArrElement(MESSAGE)}${getRandomArrElement(MESSAGE) }`;
};
// конструктор  комментария
const createComments = () =>({
  id:generatorIDComment(),
  avatar:`img/avatar-${getRandomInteger(1,6)}.svg`,
  messages:createMessage(),
  name:getRandomArrElement(NAMES),
});


//конструктор объекта фотографии
const createPhoto = (id)=> ({
  id:++id,
  url:`/photos/${id}.jpg`,
  description:getRandomArrElement(DESCRIPTION),
  likes:getRandomInteger(MIN_LIKE,MAX_LIKE),
  comments:Array.from({length:getRandomInteger(0,30)},createComments)});


const returnArrayofPhoto = () => Array.from({length:PHOTO_COUNT}, (_, index)=>createPhoto(index));
returnArrayofPhoto();
