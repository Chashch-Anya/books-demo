import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

export default Controller.extend({
    dataService: service('data2'),
    actions:
    {
        async saveMeeting(meeting){
            try{
                this.get('model').setProperties(meeting)
                await this.get('model').save();
                
                this.transitionToRoute('meetings.index');
            } catch (e) {
                this.send('error', new Error('Connection failed'));
              }
        }
    }
});
