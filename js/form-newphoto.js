import {controlStringLenght } from './util.js';
import { resetScale } from './scale.js';
import{resetEffects,setEffectsSlider} from './effect-newphoto.js';
import { initScaleElement } from './scale.js';
const TAGSCOUNT = 5;
const MAX_HASHTAG_LENGTH = 19;

const imgUploadInputField = document.querySelector('.img-upload__input'); //поле загрузки нового фото
const imgUploadForm = document.querySelector('.img-upload__overlay');//<!-- Форма редактирования изображения -->
const uploadForm = document.querySelector('.img-upload__form');//Форма отправки данных
const closeimgButton = document.querySelector('.img-upload__cancel');
const commentsField = uploadForm.querySelector('.text__description');
const hashtagsField = uploadForm.querySelector('.text__hashtags');
const submitFormButton = document.querySelector('.img-upload__submit');

//функция по проверке длины комментариев
const validateComments = (str)=>controlStringLenght(str,140);
//функция преобразования строки ввода хэштегов в массив

//создание объекта библиотеки pristine
const pristine = new Pristine(uploadForm,{
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper'
});
const convertHashtagString = (str)=> str?.toLowerCase().split(' ').filter((tag) => tag !== '');

//использование библиотеки Pristine
//проверка хэш-тегов
const validateCountHashtags = (tags) =>convertHashtagString(tags).length <= TAGSCOUNT;//проверка на количество хэштегов
const validateRegexHashtags = (tags) =>{
  if (tags === '') {
    return true;
  }
  const regex = new RegExp(`^#[a-zа-яё0-9]{1,${MAX_HASHTAG_LENGTH}}$`, 'i'); //рег-ное выражение
  const convertStr = convertHashtagString(tags);
  return convertStr.every((tag) =>(regex.test(tag)));
};//проверка на регулярное выражение
const validateUnickHashtags = (tags) =>{
  const toLowerCase = convertHashtagString(tags).map((tag)=>tag.toLowerCase());
  return toLowerCase.length === new Set(toLowerCase).size;
};
pristine.addValidator(
  hashtagsField,
  validateCountHashtags,
  '!!!введёно неверное количество хэштегов',
  3,
  true);
pristine.addValidator(
  hashtagsField,
  validateRegexHashtags,
  '!!!введён невалидный  хэштег',
  2,
  true);
pristine.addValidator(
  hashtagsField,
  validateUnickHashtags,
  '!!!введён не уникальный хэштег',
  1,
  true);
//проверка комментариев
pristine.addValidator(
  commentsField,
  validateComments,
  'Введите от 0 до 140 символов',true
);
//отрытие формы для выбора фотографии
const openNewPhoto = ()=>{
  imgUploadForm.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown',onDocumentKeydown);
  initScaleElement();
  setEffectsSlider();
};
  //закрытие формы для выбора фотографии
const hideNewPhoto = ()=>{
  imgUploadForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown',onDocumentKeydown);
  uploadForm.reset();
  resetScale();
  resetEffects();
  pristine.reset();
};
function onDocumentKeydown(evt){
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideNewPhoto();
  }
}

const blockSubmitButton = () => {
  submitFormButton.disabled = true;
  submitFormButton.textContent = 'Отправляю данные...';
};

const unblockSubmitButton = () => {
  submitFormButton.disabled = false;
  submitFormButton.textContent = 'Опубликовать';
};
const onOpenButton = ()=>openNewPhoto();
const onCloseButton = ()=>hideNewPhoto();
//установка параметров формы
const installForm = ()=>{
  //изменение поля  для выбора нового фото
  imgUploadInputField.addEventListener('change',onOpenButton);
  closeimgButton.addEventListener('click',onCloseButton);
  pristine.addValidator(hashtagsField,
    validateUnickHashtags,
    '!!!введён не уникальный хэштег');
};
  //нажатие кнопки отправыки формы
const setOnFormSubmit = (cb) => {
  uploadForm.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      cb(new FormData(uploadForm));
    }
  });
};
//отмена esc в момент нахождения фокуса в поле комментариев
commentsField.addEventListener('keydown',(evt)=>{
  if(evt.key === 'Escape'){
    evt.stopPropagation();
  }
});
hashtagsField.addEventListener('keydown',(evt) => {
  if(evt.key === 'Escape'){
    evt.stopPropagation();
  }
});
export {installForm,setOnFormSubmit,unblockSubmitButton,hideNewPhoto};
