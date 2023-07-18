//модуль по работе с сообщениями при отправке формы
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

function onDocumentKeydown(evt,callback){
  if (evt.key === 'Escape') {
    evt.preventDefault();
    callback();
  }
}
//реализация показа успешной отправки сообщения
//закрытие по нажатию на тело документа вне сообщения
const onSuccessDocumentClick = (evt)=>{
  evt.preventDefault();
  if (!evt.target.closest('.success__inner')){
    closeSuccessMessage();
  }
};
const onSuccesButtonClick = ()=>closeSuccessMessage();//закрытие по кнопке
const onCloseSuccessMessage = (evt)=>onDocumentKeydown(evt,closeSuccessMessage);

function closeSuccessMessage (){
  // console.log( document.body.querySelector('.success'));
  document.body.querySelector('.success').remove();
  document.body.classList.remove('has-modal');
  document.removeEventListener('click',onSuccessDocumentClick);
  document.removeEventListener('keydown', onCloseSuccessMessage);

}

const showSuccessMessage = ()=>{
  const successBlock = successTemplate.cloneNode(true);
  const successButton = successBlock.querySelector('.success__button');
  document.body.append(successBlock);
  successButton.addEventListener('click', onSuccesButtonClick);
  document.body.classList.remove('has-modal');
  document.body.addEventListener('click',onSuccessDocumentClick);
  document.body.addEventListener('keydown',onCloseSuccessMessage);
};

//реализация окна с показом ошибки
//закрытие окна по щелчку вне области сообщения
const onErrorDocumentClick = (evt)=>{
  evt.preventDefault();
  if (!evt.target.closest('.error__inner')){
    closeErrorMessage();
  }
};
const onErrorButtonclick = () => closeErrorMessage();
const onCloseErrorMessage = (evt)=>onDocumentKeydown(evt,closeErrorMessage);
function closeErrorMessage (){
  document.body.querySelector('.error').remove();
  document.body.classList.remove('has-modal');
  document.body.removeEventListener('click',onErrorDocumentClick);
  document.removeEventListener('keydown', onCloseErrorMessage);
}

const showErrorMessage = ()=>{
  const errorBlock = errorTemplate.cloneNode(true);
  const errorButton = errorBlock.querySelector('.error__button');
  document.body.append(errorBlock);
  document.body.classList.add('has-modal');
  errorButton.addEventListener('click',onErrorButtonclick);
  document.body.addEventListener('keydown',onCloseErrorMessage);
  document.body.addEventListener('click',onErrorDocumentClick);

};

export{showSuccessMessage,showErrorMessage};

