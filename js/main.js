import {renderPosts} from './render-posts.js';

import {setEffectsSlider} from './effect-newphoto.js';
import { getData, sendData } from './data-api.js';
import { hideNewPhoto,installForm,setOnFormSubmit,unblockSubmitButton} from './form-newphoto.js';
import { showMessage} from './util.js';
import { showSuccessMessage,showErrorMessage } from './messages.js';
import {removeDebounce, showFilters} from './filters.js';
import { setPreviewPictureLoader } from './upload-newphoto.js';
setOnFormSubmit(async (data) => {
  try {
    await sendData(data);
    hideNewPhoto();
    showSuccessMessage();
  } catch {
    showErrorMessage();
  } finally {
    unblockSubmitButton();
  }
});

try {
  const data = await getData();
  renderPosts(data);
  installForm(data);

  setEffectsSlider();
  showFilters();
  setPreviewPictureLoader();
  removeDebounce(data);
} catch (err) {
  showMessage(err.message);
}
