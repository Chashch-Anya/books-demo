import Controller from '@ember/controller';
// import {inject as service} from '@ember/service';

export default Controller.extend({
    // dataService: service('data2'),
    actions:
    {
        async saveReport(report){
            try{
                this.get('model').setProperties(report)
                await this.get('model').save();
        
                this.transitionToRoute('meetings.index');
            } catch (e) {
                this.send('error', new Error('Connection failed'));
              }
        }
    }
});
