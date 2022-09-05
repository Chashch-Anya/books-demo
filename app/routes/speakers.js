import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    search: {
      refreshModel: true
    }
  },

  model({search}) {
    if (search) {
      return this.get('store').query('speaker', {q: search});
    }
    return this.get('store').findAll('speaker')
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
});
