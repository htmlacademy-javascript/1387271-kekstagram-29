
const bigPhoto = document.querySelector('.big-picture');
// доступ к блоку куда вставлять комментарии
const commContainer = document.querySelector('.social__comments');
////доступ к шаблону списка комментарий
const commTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
//отображение,блока  загрузки дополнительной порции комментариев
const commentsLoadClick = document.querySelector('.comments-loader');
// cчетчики комментариев
const commentsShownCountElement = document.querySelector('.social__comment-count');
const commentsPartCountElement = commentsShownCountElement.querySelector('.comments-part');//сколько показано комментариев
const commentsCountElement = commentsShownCountElement.querySelector('.comments-count');//сколько всего комментариев
//ограничение по количеству комментариев
const PARTCOMMENTS = 5;
//количество показанных комментариев
let commShown = 0;
//const closePhoto = document.querySelector('.big-picture__cancel');
const hideBigPhoto = () =>{
  bigPhoto.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown',onDocumentKeydown);
  commShown = 0;
};
function onDocumentKeydown(evt){
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideBigPhoto();
  }
}
const openModal = ()=>{
  bigPhoto.classList.remove('hidden');
  commentsShownCountElement.classList.remove('hidden');
  commentsCountElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown',onDocumentKeydown);
};
const closePhoto = document.querySelector('.big-picture__cancel');
closePhoto.addEventListener('click',() => {
  hideBigPhoto();
});

// создание комментария
const createComment = (comment)=>{
  const comElement = commTemplate.cloneNode(true);
  comElement.querySelector('.social__picture').src = comment.avatar;
  comElement.querySelector('.social__picture').alt = comment.name;
  comElement.querySelector('.social__text').textContent = comment.messages;
  return comElement;
};
//функция по отображению комментария
const renderComments = (comments)=>{
  commShown += PARTCOMMENTS;
  if(commShown >= comments.length){
    commentsLoadClick.classList.add('hidden');
    commShown = comments.length;
  } else {
    commentsLoadClick.classList.remove('hidden');
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

//функция по отображению большого фото с комментариями
const createBigPhoto = (item) => {
  bigPhoto.querySelector('.big-picture__img img').src = item.url;
  bigPhoto.querySelector('.big-picture__img img').alt = item.description;
  bigPhoto.querySelector('.likes-count').textContent = item.likes;
  bigPhoto.querySelector('.comments-count').textContent = item.comments.length;
  bigPhoto.querySelector('.social__caption').textContent = item.description;
  const onCommentsLoaderClick = () =>renderComments(item.comments);
  //заполнение комментариев
  commContainer.comments = onCommentsLoaderClick(item.comments);//renderComments(item.comments);
  commentsLoadClick.addEventListener('click',onCommentsLoaderClick);
};

export{createBigPhoto,bigPhoto,openModal,renderComments};
