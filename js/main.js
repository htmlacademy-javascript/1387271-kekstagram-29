import {renderPosts} from './render-posts.js';
import { uploadNewPhoto } from './load-newphoto.js';
import { initScaleElement } from './scale.js';
import {setEffectsSlider} from './effect-newphoto.js';
import { getData, sendData } from './api.js';
/*setOnFormSubmit(async (data) => {
  try {
    await sendData(data);
    hideModal();
    showSuccessMessage();
  } catch {
    showErrorMessage();
  } finally {
    unblockSubmitButton();
  }
});*/

try {
  const data = await getData();
  renderPosts(data);
  uploadNewPhoto();
  initScaleElement();
  setEffectsSlider();
} catch (err) {
  //showAlert(err.message);
  console.error(err);
}



