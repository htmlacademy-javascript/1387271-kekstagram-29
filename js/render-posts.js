import {ArrayofPhoto} from './data.js';
import{createBigPhoto,bigPhoto} from './big-photo.js';

const closePhoto = document.querySelector('.big-picture__cancel');

closePhoto.addEventListener('click',() => {
  bigPhoto.classList.add('hidden');
});
document.addEventListener('keydown',(evt)=>{
  if(evt.key === 'Escape'){
    evt.preventDefault();
    bigPhoto.classList.add('hidden');
  }
});
const openModal = ()=>{
  bigPhoto.classList.remove('hidden');
  document.body.classList.add('modal-open');
};
//список куда вставлять
const picContainer = document.querySelector('.pictures');
//доступ к шаблону списка фотографий
const picTemplate = document.querySelector('#picture').content.querySelector('.picture');

//заполняем массив данных с помощью функции  ArrayofPhoto
const listPhotos = ArrayofPhoto();

//функция по созданию списка фотографий
const renderPosts = () =>{
  //создаем фрагмент
  const listFragment = document.createDocumentFragment();
  listPhotos.forEach((item) =>{
    //клонируем новое фото с использованием шаблона
    const picElement = picTemplate.cloneNode(true);
    //заполняем фото данными из массива
    picElement.querySelector('.picture__img').src = item.url;
    picElement.querySelector('.picture__img').alt = item.description;
    picElement.querySelector('.picture__likes').textContent = item.likes;
    picElement.querySelector('.picture__comments').textContent = item.comments.length;

    picElement.addEventListener('click', () => {
      createBigPhoto(item);
      openModal(picElement);
    });

    listFragment.appendChild(picElement);

  });
  // добавляем в dom список из фрагмента
  picContainer.appendChild(listFragment);
};
//

export {renderPosts};
export {listPhotos};
