import Controller from '@ember/controller';
import {
  inject as service
} from '@ember/service';

export default Controller.extend({
  dataService: service('data2'),
  actions: {
    async deleteMeeting(report) {
      try {
        await report.destroyRecord();
        this.transitionToRoute('meetings.index');
      } catch (e) {
        this.send('error', new Error('Connection failed'));
      }
    }
  }
});
