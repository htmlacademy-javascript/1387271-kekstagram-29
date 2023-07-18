import { getRandomInteger } from "./util";
const COUNT_PICTURES = 10;
const Filters = {
  DEFAULT:'filter-default',
  RANDOM:'filter-random',
  POPULAR:'filter-discussed',
};
let images = [];
const filterElement = document.querySelector('.img-filters');
let presentFilter = Filters.DEFAULT;
const sortByComments = (img1,img2)=> img2.comments.length - img1.comments.length;
const getSortedImages = (images,cb)=>{
  switch(presentFilter){
    case Filters.RANDOM:
      return images.slice().sort(getRandomInteger(1,COUNT_PICTURES));
    case Filters.POPULAR:
      return images.slice().sort(sortByComments);
    default:
      return images.slice();
  }
const setOnFilterClick=(cb)=>{


}
}


