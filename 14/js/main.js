import {renderPosts} from './render-posts.js';
import { uploadNewPhoto } from './load-newphoto.js';
import { initScaleElement } from './scale.js';
import {setEffectsSlider} from './effect-newphoto.js';
renderPosts();
uploadNewPhoto();
initScaleElement();
setEffectsSlider();

