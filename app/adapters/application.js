import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    host: "http://localhost:3000",

    init(){
        this._super(...arguments);
        this.set('headers',{
            'Content-Type': 'application/json'
        });
    },

    buildURL(modelName, id, snapshot, requestType, query) {
        let url = this._super(...arguments);
        if (modelName === 'speaker' && requestType === 'findRecord' && id) {
          url += '?_embed=reports';
        }
    
        if (modelName === 'book' && requestType === 'findRecord' && id) {
          url += '?_embed=reports';
        }

        if (modelName === 'meeting' && requestType === 'findAll' && id) {
            url += '?_embed=reports';
          }
              
        return url;
      }
});
