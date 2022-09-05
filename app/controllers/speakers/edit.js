import Controller from '@ember/controller';
// import {inject as service} from '@ember/service';

export default Controller.extend({
    // dataService: service('data2'),
    actions:
    {
        async saveSpeaker(speaker){
            try{
                this.get('model').setProperties(speaker);
                await this.get('model').save();
                this.transitionToRoute('speakers.index');
            } catch (e) {
                this.send('error', new Error('Connection failed'));
              }
        }
    }
});
