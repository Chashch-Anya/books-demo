import Controller from '@ember/controller';
import {inject as service} from '@ember/service';
import EmberObject from '@ember/object'

export default Controller.extend({
    init(){
        this._super(...arguments);
        this.set('speaker',EmberObject.create());
        this.get('speaker').set('firstName','');
        this.get('speaker').set('lastName','');
    },

    dataService: service('data2'),
    actions:{
        async saveSpeaker(speaker){
           await this.get("dataService").createSpeaker(speaker);
            this.transitionToRoute('speakers.index');
        },

        changeName(firstName){
            this.set('firstName',firstName);
        }
    }
});
