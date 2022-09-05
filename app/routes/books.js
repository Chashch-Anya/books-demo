import Route from '@ember/routing/route';
// import {inject as service} from '@ember/service';

export default Route.extend({
  // dataService: service('data2'),
  queryParams: {
    search: {
      refreshModel: true
    },
    search_tag: {
      refreshModel: true
    }
  },

  model({search, search_tag }) {

      if (search && search_tag) {
        // return this.get("dataService").getBooks(search, search_tag);
      } else
      if (search) {
        // return this.get("dataService").getBooks(search);
        return this.get('store').query('book', { q: search });
      } else
      // if (search_tag) {
        // return  this.get("dataService").getBooks(search_tag);
      // } else
       {
        return this.get('store').findAll('book');
      }
  },

  setupController(controller, model) {
    this._super(...arguments);
    // if (this.get('modelPromise')) {
    //   controller.set('isLoading', true);
    // }
  },


  // resetController(controller, isExiting, transition) {
  //   this._super(...arguments);
  //   if (isExiting) {
  //     controller.set('isLoading', false);
  //     this.set('modelPromise', null);
  //   }
  // },

  actions: {
    refreshAuthors() {
      // this.refresh();
    },
    // loading(transition, originRoute) {
    //   return false;
    // }
},
})
