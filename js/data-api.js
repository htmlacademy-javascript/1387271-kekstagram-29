const PATH = 'https://29.javascript.pages.academy/kekstagram';
const Method = {
  GET:'GET',
  POST:'POST',
};
const Direction = {
  GET_DATA:'/data',
  SEND_DATA:'/',
};
const ErrorText = {
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

const getData = () => uploadData(Direction.GET_DATA, ErrorText.GET_DATA);

const sendData = (body) => uploadData(Direction.SEND_DATA, ErrorText.SEND_DATA, Method.POST, body);

export { getData, sendData };


