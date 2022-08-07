import Controller from '@ember/controller';
import { get, set } from '@ember/object';

import {
  inject as service
} from '@ember/service';
import EmberObject from '@ember/object'

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.set('book', EmberObject.create());
    this.get('book').set('name', '');
    this.get('book').set('author', '');
    this.get('book').ser('page_count','');
    this.get('book').ser('pict','');
    this.get('book').ser('description','');
    this.get('book').set('tags', '[]');
  },

  dataService: service('data2'),
  actions: {
    async saveBook(e) {
      e.preventDefault();

      set(this, 'isUploadingFile', true);
      const uploadData = get(this, 'uploadData');

      await this.get("dataService").createBook(book, uploadData, true);

      set(this, 'isUploadingFile', false);
      this.transitionToRoute('books.index');
    },
    changeTags(newTags) {
      set(this, 'tags', [...newTags]);

      // eslint-disable-next-line no-console
      console.log(get(this, 'tags'));
    },
    changeUploadData(uploadData) {
      set(this, 'uploadData', uploadData);
    }
  },
  didReceiveAttrs(){
    this._super(...arguments);
}
});
