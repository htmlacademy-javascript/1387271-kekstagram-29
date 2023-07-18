import {renderPosts} from './render-posts.js';
import { initScaleElement } from './scale.js';
import {setEffectsSlider} from './effect-newphoto.js';
import { getData, sendData } from './data-api.js';
import { hideNewPhoto,installForm,setOnFormSubmit,unblockSubmitButton} from './load-newphoto.js';
import { showMessage } from './util.js';
import { showSuccessMessage,showErrorMessage } from './messages.js';
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

  initScaleElement();
  setEffectsSlider();
} catch (err) {
  showMessage(err.message);
}
