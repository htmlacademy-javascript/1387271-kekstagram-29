import {ArrayofPhoto} from './data.js';
//список куда вставлять
const picContainer = document.querySelector('.pictures');
//доступ к шаблону
const picTemplate = document.querySelector('#picture').content.querySelector('.picture');

//заполняем массив данных с помощью функции  ArrayofPhoto
const listPhotos = ArrayofPhoto();

//функция по созданию списка фотографий
const renderPosts = () =>{
  //создаем фрагмент
  const listFragment = document.createDocumentFragment();
  listPhotos.forEach(({url,description,likes,comments}) =>{
    //клонируем новое фото с использованием шаблона
    const picElement = picTemplate.cloneNode(true);
    //заполняем фото данными из массива
    picElement.querySelector('.picture__img').src = url;
    picElement.querySelector('.picture__img').alt = description;
    picElement.querySelector('.picture__likes').textContent = likes;
    picElement.querySelector('.picture__comments').textContent = comments.length;
    listFragment.appendChild(picElement);

  });
  // добавляем в dom список из фрагмента
  picContainer.appendChild(listFragment);
};
export {renderPosts};
