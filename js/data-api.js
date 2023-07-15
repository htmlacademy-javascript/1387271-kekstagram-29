const PATH = 'https://29.javascript.pages.academy/kekstagram';
const Method = {
  GET:'GET',
  POST:'POST',
};
const direction = {
  GET_DATA:'/data',
  SEND_DATA:'/',
};
const Error = {
  GET_DATA: 'Ошибка загрузки данных!Обновите страницу.',
  SEND_DATA: 'Форма не отправлена! Отправьте повторно.',
};
const uploadData = (route, errorText, method = Method.GET, body = null) =>
  fetch(`${PATH}${route}`, { method, body })
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .catch(() => {
      throw new Error(errorText);
    });

const getData = () => uploadData(direction.GET_DATA, Error.GET_DATA);

const sendData = (body) => uploadData(direction.SEND_DATA, Error.SEND_DATA, Method.POST, body);

export { getData, sendData };


