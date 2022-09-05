import Route from '@ember/routing/route';

export default Route.extend({
  queryParams:{
  },
  model() {
    return this.get('store').findAll('meeting');
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
