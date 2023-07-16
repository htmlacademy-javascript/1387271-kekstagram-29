//модуль по работе с сообщениями при отправке формы
const successTemplate = document.querySelector('#success').content.querySelector('.success');
//const errorTemplate = document.querySelector('#error').content.querySelector('.error');

function onDocumentKeydown(evt,callback){
  if (evt.key === 'Escape') {
    evt.preventDefault();
    callback();
  }
}
//закрытие по нажатию на тело документа вне сообщения
/*const onSuccessDocumentClick = (evt)=>{
  evt.preventDefault();
  if (!evt.target.closest('.success__inner')){
    closeSuccessMessage();
  }
};*/
const onSuccesButtonClick = ()=>closeSuccessMessage();//закрытие по кнопке
const onCloseSuccessMessage = (evt)=>onDocumentKeydown(evt,closeSuccessMessage);

function closeSuccessMessage (){
  console.log( document.body.querySelector('.success'));
  document.body.querySelector('.success').remove();
  //document.removeEventListener('click',onSuccessDocumentClick);
  document.removeEventListener('keydown', onCloseSuccessMessage);

}

const showSuccessMessage = ()=>{
  const successBlock = successTemplate.cloneNode(true);
  document.body.append(successBlock);
  const successButton = successBlock.querySelector('.success__button');
  successButton.addEventListener('click', onSuccesButtonClick);
  //document.body.addEventListener('click',onSuccessDocumentClick);
  document.body.addEventListener('keydown',onCloseSuccessMessage);
};

export{showSuccessMessage};
