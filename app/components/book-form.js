import Component from '@ember/component';

export default Component.extend({
  actions: {
    sumbitForm(e) {
      e.preventDefault();
      this.onsubmit({
        id: this.get('id'),
        name: this.get('name'),
        author: this.get('author'),
        pageCount: this.get('pageCount'),
        // filename: this.get('filename'),
        description: this.get('description'),
        // tags: this.get('tags'),
      });
    }
  },

  didReceiveAttrs() {
    this._super(...arguments);
    this.setProperties({
      id: this.get('book.id') ? this.get('book.id') : undefined,
      title: this.get('book.name'),
      author: this.get('book.author'),
      pagesCount: this.get('book.pageCount'),
      // coverURL: this.get('book.filename'),
      descriURL: this.get('book.description'),
      //   tags: this.get('book.tags'),
    });
  }
});
