
const bigPhoto = document.querySelector('.big-picture');
// доступ к блоку куда вставлять комментарии
const commContainer = document.querySelector('.social__comments');

////доступ к шаблону списка комментарий
const commTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
//отображение,блока  загрузки дополнительной порции комментариев
const commentsMoreElement = document.querySelector('.comments-loader');
// cчетчики комментариев
const commentsShown = document.querySelector('.social__comment-count');
const commentsCount = document.querySelector('.comments-count');
//ограничение по количеству комментариев
const PARTCOMMENTS = 5;
//количество показанных комментариев
let commShown = 0;
const closePhoto = document.querySelector('.big-picture__cancel');

closePhoto.addEventListener('click',() => {
  bigPhoto.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown');
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
// создание комментария
const createComment = (comment)=>{
  const comElement = commTemplate.cloneNode(true);
  comElement.querySelector('.social__picture').src = comment.avatar;
  comElement.querySelector('.social__picture').alt = comment.name;
  comElement.querySelector('.social__text').textContent = comment.messages;
  return comment;
};
//функция по отображению комментария
const renderComments = (comments)=>{
  commShown += PARTCOMMENTS;
  if(commShown >= comments.length){
    commentsMoreElement.classList.add('hidden');
    commShown = comments.length;
  } else {
    commentsMoreElement.classList.remove('hidden');
  }
  const listFragment = document.createDocumentFragment();
  for(let i = 0; i < commShown;i++){
    const comment = createComment(comments[i]);
    listFragment.appendChild(comment);
  }
  commContainer.innerHTML = '';
  commentsShown.textContent = commShown;
  commentsCount.textContent = comments.length;
  commContainer.appendChild(listFragment);

};
const onCommentsLoad = () =>renderComments();
commentsMoreElement.onclick = onCommentsLoad;
//функция по отображению большого фото с комментариями
const createBigPhoto = (item) => {
  bigPhoto.querySelector('.big-picture__img img').src = item.url;
  bigPhoto.querySelector('.big-picture__img img').alt = item.description;
  bigPhoto.querySelector('.likes-count').textContent = item.likes;
  bigPhoto.querySelector('.comments-count').textContent = item.comments.length;
  bigPhoto.querySelector('.social__caption').textContent = item.description;
  
  //обнуляем  старую разметку
  //формирование списка комментариев
  //commentsMoreElement.classList.add('hidden');
  //commentsLikecounter.classList.add('hidden');

};
// создать функцию по заполнению шаблона комментариев  и добавление в DOM

export{createBigPhoto,bigPhoto,openModal};
