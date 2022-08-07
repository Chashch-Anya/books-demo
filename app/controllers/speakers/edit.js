import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

export default Controller.extend({
    dataService: service('data2'),
    actions:
    {
        async saveSpeaker(speaker){
            await this.get("dataService").updateSpeaker(speaker);
            this.transitionToRoute('speakers.index');
        }
    }
});
