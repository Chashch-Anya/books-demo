import Route from '@ember/routing/route';

export default Route.extend({
    queryParams: {

      },
      model() {
          return this.get('store').findAll('report');
      },
    
      afterModel(resolvedModel) {
        resolvedModel.save();
      },
    
      setupController() {
        this._super(...arguments);
      }
});
