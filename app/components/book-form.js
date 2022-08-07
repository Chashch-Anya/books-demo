import Component from '@ember/component';
import { get, set } from '@ember/object';

export default Component.extend({
  actions: {
    sumbitForm(e) {
      e.preventDefault();

      this.onsumbit(this.get('book'));
    },
    changeTags(newTags) {
      set(this, 'tags', [...newTags]);

      // eslint-disable-next-line no-console
      console.log(get(this, 'tags'));
    },
    changeUploadData(uploadData) {
      set(this, 'uploadData', uploadData);
    },

    change() {
      set(this, 'tags', ['1', '2', '3']);
    },
  }
});
