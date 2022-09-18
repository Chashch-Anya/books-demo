import Component from '@ember/component';
// import {inject as service} from '@ember/service';

export default Component.extend({
  init() {
    this._super(...arguments);
  },

  actions: {
    async deleteBook(book) {
      await book.destroyRecord();
    },
  }
});
