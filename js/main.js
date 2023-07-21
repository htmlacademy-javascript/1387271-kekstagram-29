import {renderPosts} from './render-posts.js';
import { getData, sendData } from './data-api.js';
import { hideNewPhoto,setOnFormSubmit,unblockSubmitButton,installForm} from './form-newphoto.js';
import { showMessage} from './util.js';
import { showSuccessMessage,showErrorMessage } from './messages.js';
import {removeDebounce,showFilters} from './filters.js';
import { setPreviewPictureLoader } from './upload-newphoto.js';
setOnFormSubmit(async (data) => {
  try {
    installForm();
    await sendData(data);
    hideNewPhoto();
    showSuccessMessage();
  } catch {
    showErrorMessage();
  } finally {
    unblockSubmitButton();
  }
});
installForm();
setPreviewPictureLoader();
try {
  const data = await getData();
  renderPosts(data);
  removeDebounce(data);
  showFilters();
} catch (err) {
  showMessage(err.message);
}
