import Controller from '@ember/controller';

export default Controller.extend({
    actions:{       
        async saveBook(book) {            
          this.get('model').setProperties(book);
          await this.get('model').save();
          
          this.transitionToRoute('books.index');
          },
        // changeTags(newTags) {
        //     set(this, 'tags', [...newTags]);
      
        //     // eslint-disable-next-line no-console
        //     console.log(get(this, 'tags'));
        //   },
          // changeUploadData(uploadData) {
          //   set(this, 'uploadData', uploadData);
          // }
    },
    // didReceiveAttrs(){
    //     this._super(...arguments);
        
    //     this.setProperties({
    //         id: this.get('book.id') !== undefined ? this.get('book.id') : undefined,
    //         Name: this.get('book.name'),
    //         Author: this.get('book.author'),
    //         PCount: this.get('book.page_count'),
    //         fileName: this.get('book.fileName'),
    //         DiscrUrl: this.get('book.description'),
    //         tags: this.get('book.tags')
    //     })
    // }
});
