//модуль для загрузки нового фото
import {controlStringLenght } from './functions.js';
const imgUploadInputElement = document.querySelector('.img-upload__input'); //поле загрузки нового фото
const imgUploadElement = document.querySelector('.img-upload__overlay');//<!-- Форма редактирования изображения -->
const uploadForm = document.querySelector('.img-upload__form');//Форма отправки данных
const closeimgButton = document.querySelector('.img-upload__cancel');
const uploadNewPhoto = ()=>{
  //изменение поля  для выбора нового фото
  imgUploadInputElement.addEventListener('change',() => {
    imgUploadElement.classList.remove('hidden');
    document.body.classList.add('modal-open');
  });
  //закрытие формы для выбора фотографии
  closeimgButton.addEventListener('click',()=>{
    imgUploadElement.classList.add('hidden');
    document.body.classList.remove('modal-open');
  });
  //использование библиотеки Pristine
  const pristine = new Pristine(uploadForm,{
    classTo: 'img-upload__field-wrapper',
    errorTextParent: 'img-upload__field-wrapper'
  });
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
    uploadForm.querySelector('.text__description'),
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


};
export {uploadNewPhoto};
