import Controller from '@ember/controller';

export default Controller.extend({
    queryParams:["search", "tags_search"],
    search:'',
    tags_search:'',

    actions: {
        async deleteBook(book) {
          await book.destroyRecord();
        },
    }
});
