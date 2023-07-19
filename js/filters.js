import { getRandomInteger } from './util';
const COUNT_PICTURES = 10;
const filterContainer = document.querySelector('.img-filters');
const Filters = {
  DEFAULT:'filter-default',
  RANDOM:'filter-random',
  POPULAR:'filter-discussed',
};
let images = [];
const filterElement = document.querySelector('.img-filters');
let presentFilter = Filters.DEFAULT;
const sortByComments = (img1,img2)=> img2.comments.length - img1.comments.length;
const getSortedImages = ()=>{
  switch(presentFilter){
    case Filters.RANDOM:
      return images.slice().sort(getRandomInteger(1,COUNT_PICTURES));
    case Filters.POPULAR:
      return images.slice().sort(sortByComments);
    default:
      return images.slice();
  }
};
const setOnFilterClick = (cb)=>{
  filterContainer.addEventListener('click',(evt) => {
    const clickedButton = evt.target;
    if(!evt.target.classList.contains('img-filters__button')){
      return;
    }
    if(clickedButton === presentFilter){
      return;
    }
    filterElement.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    clickedButton.classList.add('img-filters__button--active');
    presentFilter = clickedButton.id;
    cb(getSortedImages());
  });
};
const setFilters = (loadedImages,cb)=>{
  filterContainer.classList.remove('img-filters--inactive');
  images = loadedImages.slice();
  setOnFilterClick(cb);
};

export {setFilters,getSortedImages};
