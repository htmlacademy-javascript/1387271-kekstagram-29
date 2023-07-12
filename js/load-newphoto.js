//модуль для загрузки нового фото
import {controlStringLenght } from './util.js';
const imgUploadInputField = document.querySelector('.img-upload__input'); //поле загрузки нового фото
const imgUploadForm = document.querySelector('.img-upload__overlay');//<!-- Форма редактирования изображения -->
const uploadForm = document.querySelector('.img-upload__form');//Форма отправки данных
const closeimgButton = document.querySelector('.img-upload__cancel');
const commentsField = uploadForm.querySelector('.text__description');
const uploadNewPhoto = ()=>{
  //отрытие формы для выбора фотографии
  const openNewPhoto = ()=>{
    imgUploadForm.classList.remove('hidden');
    document.body.classList.add('modal-open');
    document.addEventListener('keydown',onDocumentKeydown);
  };

  //использование библиотеки Pristine
  const pristine = new Pristine(uploadForm,{
    classTo: 'img-upload__field-wrapper',
    errorTextParent: 'img-upload__field-wrapper'
  });
  //закрытие формы для выбора фотографии
  const hideNewPhoto = ()=>{
    uploadForm.reset();
    //resetScale();
    //resetEffects();
    pristine.reset();
    imgUploadForm.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown',onDocumentKeydown);
  };
  closeimgButton.addEventListener('click',()=> hideNewPhoto());
  function onDocumentKeydown(evt){
    if (evt.key === 'Escape') {
      //evt.preventDefault();
      hideNewPhoto();
    }
  }
  //проверка комментариев
  const validateComments = (str)=>controlStringLenght(str,140);
  //проверка хэш-тегов
  const hashtag = /^#[a-zа-яё0-9]{1-19}$/i;
  const str1 = uploadForm.querySelector('.text__hashtags');
  //const arrayHashtags = str1.split(' ');
  //console.log(str1);
  const validateHashtags = (str)=>{
    const arrayHashtags = str.split(' ');
    //console.log(arrayHashtags);
    arrayHashtags.forEach((item) =>(hashtag.test(item)));
  };
  pristine.addValidator(
    commentsField,
    validateComments,
    'Введите от 0 до 140 символов'
  );
  pristine.addValidator(
    str1,
    validateHashtags,
    'введён невалидный  хэш-тег');
  uploadForm.addEventListener('submit',(evt)=> {
    evt.preventDefault();
    pristine.validate();
    /* const isValid = pristine.validate();
    if (isValid) {
      console.log('Можно отправлять');
    } else {
      console.log('Форма невалидна');
    }*/

  });
  //изменение поля  для выбора нового фото
  imgUploadInputField.addEventListener('change',() =>openNewPhoto());
  commentsField.addEventListener('keydown',(evt)=>{
    if(evt.key === 'Escape'){
      evt.stopPropagation();
    }
  });
};
export {uploadNewPhoto};
