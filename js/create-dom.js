import {returnArrayofPhoto} from './data.js';
//список куда вставлять
const picContainer = document.querySelector('.pictures');
//доступ к шаблону
const picTemplate = document.querySelector('#picture').content.querySelector('.picture');

//заполняем массив данных с помощью функции  returnArrayofPhoto
const listPhotos = returnArrayofPhoto();

//функция по созданию списка фотографий
const returnListPhoto = () =>{
  //создаем фрагмент
  const listFragment = document.createDocumentFragment();
  listPhotos.forEach((photo) =>{
    //клонируем новое фото с использованием шаблона
    const picElement = picTemplate.cloneNode(true);
    //заполняем фото данными из массива
    picElement.querySelector('.picture__img').src = photo.url;
    picElement.querySelector('.picture__img').alt = photo.description;
    picElement.querySelector('.picture__likes').textContent = photo.likes;
    picElement.querySelector('.picture__comments').textContent = photo.comments.length;
    listFragment.appendChild(picElement);

  });
  // добавляем в dom список из фрагмента
  picContainer.appendChild(listFragment);
};
export {returnListPhoto};
