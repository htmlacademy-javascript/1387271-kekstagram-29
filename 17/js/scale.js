//модуль по изменению масштаба изображения
const STEP = 25;
const MIN = 25;
const MAX = 100;
const START = 100;

const uploadElement = document.querySelector('.img-upload');
const lessenBtnElement = uploadElement.querySelector('.scale__control--smaller');
const raisingBtnElement = uploadElement.querySelector('.scale__control--bigger');
const scaleInputElement = uploadElement.querySelector('.scale__control--value');
const imgElement = uploadElement.querySelector('.img-upload__preview img');


//const currentScale = getCurrentScale();
const scaleImg = (value)=>{
  scaleInputElement.value = `${value}%`;
  imgElement.style.transform = `scale(${value / 100})`;
};
const onlessenBtnClick = ()=>{
  const parseValue = parseInt(scaleInputElement.value, 10);
  let newValue = parseValue - STEP;
  if (newValue < MIN) {
    newValue = MIN;
  } else {
    scaleImg(newValue);
  }

};

const onraisingBtnClick = ()=>{
  const parseValue = parseInt(scaleInputElement.value, 10);
  let newValue = parseValue + STEP;
  if (newValue > MAX) {
    newValue = MAX;
  } else {
    scaleImg(newValue);
  }
};
const resetScale = () =>scaleImg(START);

const initScaleElement = ()=>{
  resetScale();
  lessenBtnElement.addEventListener('click',onlessenBtnClick);
  raisingBtnElement.addEventListener('click',onraisingBtnClick);
};
export{resetScale,initScaleElement};

