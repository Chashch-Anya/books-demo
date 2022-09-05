import Controller from '@ember/controller';

export default Controller.extend({
  // dataService: service('data2'),
  actions: {
    async deleteSpeaker(speaker) {
      try {
        await speaker.destroyRecord();
        this.transitionToRoute('speakers.index');
      } catch (e) {
        this.send('error', new Error('Connection failed'));
      }
    }
  }
});
