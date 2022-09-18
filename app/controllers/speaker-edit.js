import Controller from '@ember/controller';

export default Controller.extend({
    actions:
    {
        async saveSpeaker(speaker){
            try{
                this.get('model').setProperties(speaker)
                await this.get('model').save();
        
                this.transitionToRoute('speakers');
            } catch (e) {
                this.send('error', new Error('Connection failed'));
              }
        }
    }
});
