import Controller from '@ember/controller';
import {
  inject as service
} from '@ember/service';

export default Controller.extend({
  dataService: service('data2'),
  actions: {
    async deleteSpeaker(speaker) {
      try {
        await this.get('dataService').deleteSpeaker(speaker);
        this.transitionToRoute('speakers.index');
      } catch (e) {
        this.send('error', new Error('Connection failed'));
      }
    }
  }
});
