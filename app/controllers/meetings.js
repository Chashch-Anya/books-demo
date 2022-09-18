import Controller from '@ember/controller';
import { computed } from '@ember/object';

export const PER_PAGE = 2;

export default Controller.extend({
  queryParams: ['page','speaker', 'book', 'date' ],
  page: 1,
  speaker: '',
  book:'',
  date: '',

  pages: computed('model.meetings.meta.total', function() {
    const total = Number(this.get('model.meetings.meta.total'));
    if (Number.isNaN(total) || total <= 0) {
      return [];
    }

    return new Array(Math.ceil(total / PER_PAGE))
      .fill()
      .map((value, index) => index + 1);
  }),

  selectedBook: computed("book", function() {
    const book = this.get("book");
    return book ? this.get("model.books").findBy("id", book) : null;
  }),

  selectedDate: computed("date", function() {
    const date = this.get("date");
    return date ? new Date(date) : "";
  }),

  selectedSpeaker: computed('speaker', function() {
    const speaker = this.get('speaker');

    return speaker ? this.get('model.speakers').findBy('id', speaker) : null;
  }),

  actions: {
    changeBook(book) {
      this.set("book", book ? book.get("id") : "");
    },

    changeDate(date) {
      this.set("date", date.toISOString());
    },

    changeSpeaker(speaker) {
      this.set("speaker", speaker ? speaker.get("id") : "");
    },
  }
});