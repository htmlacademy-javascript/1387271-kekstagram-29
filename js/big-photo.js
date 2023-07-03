
const bigPhoto = document.querySelector('.big-picture');

// доступ к блоку куда вставлять комментарии
const commContainer = document.querySelector.apply('.social__comments');
////доступ к шаблону списка комментарий
const commTemplate = document.querySelector('#comment').content.querySelector('.social__comment');

//функция по отображению комментария
const renderComment = (comment)=>{
  const comElement = commTemplate.cloneNode(true);
  comElement.querySelector('.social__picture').src = comment.avatar;
  comElement.querySelector('.social__picture').alt = comment.name;
  comElement.querySelector('.social__text').textContent = comment.messages;
  commContainer.appendChild(comElement);
};
//функция по отображению большого фото с комментариями
const createBigPhoto = (item) => {
  const imageContainer = bigPhoto.querySelector('.big-picture__img');
  const img = imageContainer.getElementsByTagName('img')[0];
  img.src = item.url;
  const likes = bigPhoto.querySelector('.likes-count');
  likes.textContent = item.likes;
  const comments = bigPhoto.querySelector('.comments-count');
  comments.textContent = item.comments.length;
  //формирование списка комментариев
  item.comments.array.forEach((it) => {
    renderComment(it);
  });
};
// создать функцию по заполнению шаблона комментариев  и добавление в DOM



export{createBigPhoto,bigPhoto};
