import Component from '@ember/component';

export default Component.extend({
  actions: {
    sumbitForm(e) {
      e.preventDefault();
      this.onsubmit({
        id: this.get('bookId'),
        name: this.get('name'),
        author: this.get('author'),
        pageCount: this.get('pageCount'),
        description: this.get('description'),
      });
    }
  },

  didReceiveAttrs() {
    this._super(...arguments);
    
    this.setProperties({
      bookId: this.get('book.id') ? this.get('book.id') : undefined,
      name: this.get('book.name'),
      author: this.get('book.author'),
      pageCount: this.get('book.pageCount'),
      description: this.get('book.description')
    });
  }
});
