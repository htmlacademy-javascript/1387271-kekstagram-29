import { renderPosts } from './render-posts.js';
import { debounce } from './util.js';

const PICTURES_COUNT = 10;

const TIMEOUT = 500;

const imgFilters = document.querySelector('.img-filters');
const filterForm = document.querySelector('.img-filters__form');
const defaultFilter = document.querySelector('#filter-default');
const randomFilter = document.querySelector('#filter-random');
const discussedFilter = document.querySelector('#filter-discussed');
const filterButtons = document.querySelectorAll('.img-filters__button');

const showFilters = () => imgFilters.classList.remove('img-filters--inactive');
const filterPictures = (pictures, sortButton) => {

  if (sortButton === defaultFilter) {
    return pictures;
  }

  if (sortButton === randomFilter) {
    return pictures.slice().sort(() => Math.random() - 0.5).slice(0, PICTURES_COUNT);
  }

  if (sortButton === discussedFilter) {
    return pictures.slice().sort((a, b) => b.comments.length - a.comments.length);
  }
};

const removePictures = () =>
  document.querySelectorAll('.picture').forEach((picture) => picture.remove());

const setOnFilterClick = (evt, pictures) => {
  filterButtons.forEach((button) => button.classList.remove('img-filters__button--active'));

  const filterButton = evt.target;
  filterButton.classList.add('img-filters__button--active');

  removePictures();
  renderPosts(filterPictures(pictures, filterButton));
};

const setDebouncedFilter = (pictures) => {
  filterForm.addEventListener('click', debounce((evt) => {
    setOnFilterClick(evt, pictures);
  }, TIMEOUT));
};

export { setDebouncedFilter, showFilters };

/*const COUNT_PICTURES = 10;
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
      return images.slice().sort(() => Math.random() - 0.5).slice(0, COUNT_PICTURES);
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

export {setFilters,getSortedImages};*/
