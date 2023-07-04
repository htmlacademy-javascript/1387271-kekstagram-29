const bigPhoto = document.querySelector('.big-picture');
// доступ к блоку куда вставлять комментарии
const commContainer = document.querySelector('.social__comments');
const listFragment1 = document.createDocumentFragment();
////доступ к шаблону списка комментарий
const commTemplate = document.querySelector('#comment').content.querySelector('.social__comment');

//функция по отображению комментария
const renderComment = (comment)=>{
  const comElement = commTemplate.cloneNode(true);
  comElement.querySelector('.social__picture').src = comment.avatar;
  comElement.querySelector('.social__picture').alt = comment.name;
  comElement.querySelector('.social__text').textContent = comment.messages;
  listFragment1.appendChild(comElement);
};
//функция по отображению большого фото с комментариями
const createBigPhoto = (item) => {
  bigPhoto.querySelector('.big-picture__img img').src = item.url;
  bigPhoto.querySelector('.big-picture__img img').alt = item.description;
  bigPhoto.querySelector('.likes-count').textContent = item.likes;
  bigPhoto.querySelector('.comments-count').textContent = item.comments.length;
  bigPhoto.querySelector('.social__caption').textContent = item.description;
  //обнуляем  старую разметку
  commContainer.innerHTML = '';
  //формирование списка комментариев
  item.comments.forEach((com) => {
    renderComment(com);
  });
  commContainer.appendChild(listFragment1);
};
// создать функцию по заполнению шаблона комментариев  и добавление в DOM

export{createBigPhoto,bigPhoto};
