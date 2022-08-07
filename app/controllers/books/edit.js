import Controller from '@ember/controller';
import { get, set } from '@ember/object';
import {inject as service} from '@ember/service';

export default Controller.extend({
    dataService: service('data2'),
    actions:
    {
        changeTags(newTags) {
            set(this, 'tags', [...newTags]);
      
            // eslint-disable-next-line no-console
            console.log(get(this, 'tags'));
          },
        async saveBook(book){
            await this.get("dataService").updateBook(book);
            this.transitionToRoute('books.index');
     
        }
    }
});
