const PATH = 'https://29.javascript.pages.academy/kekstagram';
const Method = {
  GET:'GET',
  POST:'POST',
};
const direction = {
  GET_DATA:'/data',
  SEND_DATA:'/',
};
const errorText = {
  GET_DATA: 'Ошибка загрузки данных!Обновите страницу.',
  SEND_DATA: 'Форма не отправлена! Отправьте повторно.',
};
const uploadData = (route, errText, method = Method.GET, body = null) =>
  fetch(`${PATH}${route}`, { method, body })
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .catch(() => {
      throw new Error(errText);
    });

const getData = () => uploadData(direction.GET_DATA, errorText.GET_DATA);

const sendData = (body) => uploadData(direction.SEND_DATA, errorText.SEND_DATA, Method.POST, body);

export { getData, sendData };


