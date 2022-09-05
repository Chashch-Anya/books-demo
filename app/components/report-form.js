import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),
  actions: {
    submitForm(e) {
      e.preventDefault();

      this.onsubmit({
        reportDate: this.get('meeting.meetDate'),
        bookMark: this.get('bookMark'),
        presentation: this.get('presentation'),
        video: this.get('video'),
        review: this.get('review'),
        speaker: this.get('speaker'),
        book: this.get('book'),
        meeting: this.get('meeting'),
      });
    },

    searchSpeaker(query) {
      return this.get('store').query('speaker', { q: query })      
    },
    
    searchBook(query) {
      return this.get('store').query('book', { q: query })
    },

    didReceiveAttrs() {
      this._super(...arguments);
      this.setProperties({
        reportDate: this.get('report.meeting.meetDate'),
        bookMark: this.get('report.bookMark'),
        presentation: this.get('report.presentation'),
        video: this.get('report.video'),
        review: this.get('report.review'),
        speaker: this.get('report.speaker'),
        book: this.get('report.book'),
        meeting: this.get('report.meeting'),
      });
    },
  }
});
