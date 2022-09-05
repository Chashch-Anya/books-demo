import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),

  actions: {
    submitForm(e) {
      e.preventDefault();

      this.onsubmit({
        meetDate: this.get('meetDate'),
      });
    },

    didReceiveAttrs() {
      this._super(...arguments);
      this.setProperties({
        meetDate: this.get('meeting.meetDate'),
      });
    },
  }
});