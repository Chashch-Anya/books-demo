import Route from '@ember/routing/route';

export default Route.extend({
    model({ id }) {
        let meeting = this.get('store').findRecord('meeting', id)
    
        return {
          meeting,
          report: {
            reportDate: '',
            bookMark: null,
            presentation: '',
            video: '',
            review: '',
            meeting
          }
        }
      },
});
