// модуль по работе с  фотографией
const PARTCOMMENTS = 5;//ограничение по количеству комментариев

const bigPhoto = document.querySelector('.big-picture');// доступ к блоку куда вставлять комментарии
const commContainer = document.querySelector('.social__comments');////доступ к шаблону списка комментарий
const commTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
<<<<<<< HEAD
const commentsLoadButton = document.querySelector('.comments-loader');//отображение,блока  загрузки дополнительной порции комментариев
const closePhotoButton = document.querySelector('.big-picture__cancel');//кнопка по закрытию фото
const commentsShownCountElement = document.querySelector('.social__comment-count');// cчетчики комментариев
const commentsPartCountElement = commentsShownCountElement.querySelector('.comments-part');//сколько показано комментариев
const commentsCountElement = commentsShownCountElement.querySelector('.comments-count');//сколько всего комментариев
//функция по скрытию модалки
const hideBigPhoto = () =>{
  bigPhoto.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown',onDocumentKeydown);
};
function onDocumentKeydown(evt){
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideBigPhoto();
  }
}
//открытие модалки
const openModal = ()=>{
  bigPhoto.classList.remove('hidden');
  commentsShownCountElement.classList.remove('hidden');
  commentsCountElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown',onDocumentKeydown);
};
//закрытие модалки по кнопке
closePhotoButton.addEventListener('click',() => {
  hideBigPhoto();
});
=======
const closePhoto = document.querySelector('.big-picture__cancel');
// cчетчики комментариев
const commentsMoreElement = document.querySelector('.comments-loader');
// cчетчики комментариев
const commentsShown = document.querySelector('.social__comment-count');
//const commentsCount = document.querySelector('.comments-count');

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
>>>>>>> 8b66a944e724f5e61d6e2d8b382b9653767ae49a

// создание комментария
const createComment = (comment)=>{
  const comElement = commTemplate.cloneNode(true);
  comElement.querySelector('.social__picture').src = comment.avatar;
  comElement.querySelector('.social__picture').alt = comment.name;
  comElement.querySelector('.social__text').textContent = comment.messages;
  return comElement;
};
//функция по отображению комментария
const renderComments = (comments) => {
  let commShown = 0;
  return function() {
    commShown += PARTCOMMENTS;
    if(commShown >= comments.length){
      commentsLoadButton.classList.add('hidden');
      commShown = comments.length;
    } else {
      commentsLoadButton.classList.remove('hidden');
    }
    const listFragment = document.createDocumentFragment();
    for(let i = 0; i < commShown;i++){
      const comment = createComment(comments[i]);
      listFragment.appendChild(comment);
    }
    commContainer.innerHTML = '';
    commentsPartCountElement.textContent = commShown;
    commentsCountElement.textContent = comments.length;
    commContainer.appendChild(listFragment);
  };
};
//функция по отображению большого фото с комментариями
const renderBigPhoto = (item) => {
  bigPhoto.querySelector('.big-picture__img img').src = item.url;
  bigPhoto.querySelector('.big-picture__img img').alt = item.description;
  bigPhoto.querySelector('.likes-count').textContent = item.likes;
  bigPhoto.querySelector('.comments-count').textContent = item.comments.length;
  bigPhoto.querySelector('.social__caption').textContent = item.description;
<<<<<<< HEAD
  const onCommentsLoaderClick = renderComments(item.comments);
  //заполнение комментариев
  commContainer.comments = onCommentsLoaderClick(item.comments);//renderComments(item.comments);
  commentsLoadButton.addEventListener('click',onCommentsLoaderClick);
=======
  //обнуляем  старую разметку
  commContainer.innerHTML = '';
  //формирование списка комментариев
  item.comments.forEach((com) => {
    renderComment(com);
  });
  commContainer.appendChild(listFragment1);
  commentsShown.classList.add('hidden');
  commentsMoreElement.classList.add('hidden');

>>>>>>> 8b66a944e724f5e61d6e2d8b382b9653767ae49a
};

<<<<<<< HEAD
export{renderBigPhoto,bigPhoto,openModal,renderComments};
=======
export{createBigPhoto,bigPhoto,openModal};
>>>>>>> 8b66a944e724f5e61d6e2d8b382b9653767ae49a
