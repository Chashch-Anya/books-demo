import Controller from '@ember/controller';
import {  inject as service} from '@ember/service';
import EmberObject from '@ember/object'

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.set('book', EmberObject.create());
    this.get('book').set('name', '');
    this.get('book').set('author', '');
  },

  dataService: service('data2'),
  actions: {
    async saveBook(book) {
      await this.get("dataService").createBook(book);
      this.transitionToRoute('books.index');
    }
  }
});
