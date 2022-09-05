import Controller from '@ember/controller';
// import { set } from '@ember/object';
// import {inject as service} from '@ember/service';

export default Controller.extend({
  // dataService: service('data2'),
  actions: {
     async saveBook(book) {
      let newBook = this.get('store').createRecord('book', book);
      newBook.serialize();
      await newBook.save();

      this.transitionToRoute('books.index');
    },

    // changeUploadData(uploadData) {
    //   set(this, 'uploadData', uploadData);
    // },
  },
});
