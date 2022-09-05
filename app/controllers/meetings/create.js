import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        async saveMeeting(meeting) {
          try{
          let newMeeting =  this.get("store").createRecord('meeting',meeting);
          newMeeting.serialize();
          await newMeeting.save();
    
          this.transitionToRoute('meetings.index');
        } catch (e) {
          this.send('error', new Error('Connection failed'));
        }
        },
      }
});
