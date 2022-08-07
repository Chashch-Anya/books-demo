import Route from '@ember/routing/route';
import {  inject as service} from '@ember/service';
import { Promise} from 'rsvp';
import {later} from '@ember/runloop';

export default Route.extend({
    dataService: service('data2'),
    queryParams: {
      search: {
        refreshModel: true
      },
      search_tag: {
        refreshModel: true
      }
    },
    model({
      search,
      search_tag
    }) {
      let promise = new Promise((resolve, reject) => {
        later(async () => {
          try {
            let books;
            if (search && search_tag) {
              books = await this.get("dataService").getBooks(search, search_tag);
            } else
            if (search) {
              books = await this.get("dataService").getBooks(search);
            } else
            if (search_tag) {
              books = await this.get("dataService").getBooks(search_tag);
            } else {
              books = await this.get("dataService").getBooks();
            }

            resolve(books);
          } catch (e) {
            reject("Connection failed")
          }
        }, 1000)
      }).
      then((books) => {
        this.set('controller.model', books);
      }).
      finally(() => {
        if (promise === this.get('modelPromise')) {
          this.set('controller.isLoading', false);
        }
      });

      this.set('modelPromise', promise);
      return {
        isLoading: true
      };
    },
  }
);
