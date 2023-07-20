// модуль по работе с  фотографией
const PARTCOMMENTS = 5;//ограничение по количеству комментариев

const bigPhoto = document.querySelector('.big-picture');// доступ к блоку куда вставлять комментарии
const commentsContainer = document.querySelector('.social__comments');////доступ к шаблону списка комментарий
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
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
  //evt.preventDefault();
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

// создание комментария
const createComment = (comment)=>{
  const commentElement = commentTemplate.cloneNode(true);
  commentElement.querySelector('.social__picture').src = comment.avatar;
  commentElement.querySelector('.social__picture').alt = comment.name;
  commentElement.querySelector('.social__text').textContent = comment.message;
  return commentElement;
};
//функция по отображению комментария
const renderComments = (comments) => {
  let commentShown = 0;
  return ()=> {
    commentShown += PARTCOMMENTS;
    if(commentShown >= comments.length){
      commentsLoadButton.classList.add('hidden');
      commentShown = comments.length;
    } else {
      commentsLoadButton.classList.remove('hidden');
    }
    const listFragment = document.createDocumentFragment();
    for(let i = 0; i < commentShown;i++){
      const comment = createComment(comments[i]);
      listFragment.appendChild(comment);
    }
    commentsContainer.innerHTML = '';
    commentsPartCountElement.textContent = commentShown;
    commentsCountElement.textContent = comments.length;
    commentsContainer.appendChild(listFragment);
  };
};
//функция по отображению большого фото с комментариями
const renderBigPhoto = (item) => {
  bigPhoto.querySelector('.big-picture__img img').src = item.url;
  bigPhoto.querySelector('.big-picture__img img').alt = item.description;
  bigPhoto.querySelector('.likes-count').textContent = item.likes;
  bigPhoto.querySelector('.comments-count').textContent = item.comments.length;
  bigPhoto.querySelector('.social__caption').textContent = item.description;
  const onCommentsLoaderClick = renderComments(item.comments);
  //заполнение комментариев
  commentsContainer.comments = onCommentsLoaderClick(item.comments);
  commentsLoadButton.addEventListener('click',onCommentsLoaderClick);
};

export{renderBigPhoto,bigPhoto,openModal,renderComments};
