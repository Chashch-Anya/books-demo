import Route from '@ember/routing/route';
import RSVP from 'rsvp';

import { PER_PAGE } from '../controllers/meetings';

export default Route.extend({
  queryParams: {
    page: {
        refreshModel: true
    },
    speaker: {
        refreshModel: true
    },
    book: {
        refreshModel: true
    },
    date: {
        refreshModel: true
    },
},
  model({speaker, page, book, date}) {
    const query = {
      _page: page,
      _limit: PER_PAGE,
    };

    if(speaker) { 
      query.speaker = speaker;
    }
    
    if(book) {
      query.book = book;
    }
    
    if(date) {
      query.date = date;
    }

  return RSVP.hash({
      speakers: this.store.findAll('speaker'),
      books: this.store.findAll('book'),
      meetings: this.store.query('meeting', query),
  });

    // return this.store.findAll('meeting');
  },

  actions: {
    loading() {
      return false;
    }
  }
});