import Controller from '@ember/controller';

export default Controller.extend({
  // dataService: service('data2'),
  actions: {
    async deleteReport(report) {
      try {
        await report.destroyRecord();
        
        this.transitionToRoute('meetings.index');
      } catch (e) {
        this.send('error', new Error('Connection failed'));
      }
    }
  }
});
