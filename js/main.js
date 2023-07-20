import {renderPosts} from './render-posts.js';
import { getData, sendData } from './data-api.js';
import { hideNewPhoto,setOnFormSubmit,unblockSubmitButton} from './form-newphoto.js';
import { showMessage} from './util.js';
import { showSuccessMessage,showErrorMessage } from './messages.js';
import {removeDebounce} from './filters.js';
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
  removeDebounce(data);
} catch (err) {
  showMessage(err.message);
}
