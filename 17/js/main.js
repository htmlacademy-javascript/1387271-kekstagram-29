import {renderPosts} from './render-posts.js';
import { getData} from './data-api.js';
import { installForm} from './form-newphoto.js';
import { showMessage} from './util.js';
import {removeDebounce,showFilters} from './filters.js';
import { setPreviewPictureLoader } from './upload-newphoto.js';
installForm();
setPreviewPictureLoader();
try {
  const data = await getData();
  showFilters();
  removeDebounce(data);
  renderPosts(data);
} catch (err) {
  showMessage(err.message);
}
