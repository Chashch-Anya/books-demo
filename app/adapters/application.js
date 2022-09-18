import DS from 'ember-data';
import ENV from 'ember-quickstart/config/environment';
// import { computed } from '@ember/object';
// import { inject as service } from '@ember/service';

export default DS.JSONAPIAdapter.extend({
    // host: "http://localhost:3000",
  host: ENV.backendURL,

  init(){
        this._super(...arguments);
        this.set('headers',{
            'Content-Type': 'application/json'
        });
    },

    buildURL(modelName, id, snapshot, requestType, query) {
      let url = this._super(...arguments);
  
      if (modelName === 'meeting' && requestType === 'findAll') {
        url += '?_embed=reports';
      }

      if (modelName === "meeting" && requestType === "findRecord" && id) {
        url += "?_embed=reports";
      }

      if (modelName === 'meeting' && requestType === 'query') {
        url += '?_embed=reports';
    }
      return url;
    },

  });