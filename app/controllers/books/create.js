import Controller from '@ember/controller';
import { set } from '@ember/object';
import {inject as service} from '@ember/service';
import EmberObject from '@ember/object'

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.set('book', EmberObject.create());
    this.get('book').set('name', '');
    this.get('book').set('author', '');
    this.get('book').ser('page_count','');
    this.get('book').ser('fileName','');
    this.get('book').ser('description','');
    this.get('book').set('tags', '[]');
  },

  dataService: service('data2'),
  actions: {
    // changeTags(newTags) {
    //   set(this, 'tags', [...newTags]);

    //   // eslint-disable-next-line no-console
    //   console.log(get(this, 'tags'));
    // },

    async saveBook(book) {
      // set(this, 'isUploadingFile', true);
      // const uploadData = get(this, 'uploadData');

      await this.get("dataService").createBook(
        book
      //   {
      //   name: this.get('name'),
      //   author: this.get('author'),
      //   page_count: this.get('page_count'),
      //   description: this.get('description'),
      //   tags: this.get('tags').toString().split(','),
      //   fileName: '',
      // }
      // , uploadData
      );

      // set(this, 'isUploadingFile', false);
      this.transitionToRoute('books.index');
    },

    changeUploadData(uploadData) {
      set(this, 'uploadData', uploadData);
    },
  },
});
