import {returnArrayofPhoto} from './data.js';
//список куда вставлять
const picContainer = document.querySelector('.pictures');
//доступ к шаблону
const picTemplate = document.querySelector('#picture').content.querySelector('.picture');

//
const listPhotos = returnArrayofPhoto();

//создаем фрагмент
const ListFragment = document.createDocumentFragment();
listPhotos.forEach((photo) =>{
  const picElement = picTemplate.cloneNode(true);
  picElement.querySelector('.picture__img').src = photo.url;
  picElement.querySelector('.picture__img').alt = photo.alt;
  picElement.querySelector('.picture__likes').textContent = photo.likes;
  picElement.querySelector('.picture__comments').value = photo.comments;
  ListFragment.appendChild(picElement);

});

picContainer.appendChild(ListFragment);
