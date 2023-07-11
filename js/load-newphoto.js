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

  pristine.addValidator(
    uploadForm.querySelector('.text__description'),
    validateComments,
    'От 0 до 140 символов'
  );
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
