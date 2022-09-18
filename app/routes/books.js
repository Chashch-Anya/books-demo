import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    search: {
      refreshModel: true
    },
    tags_search: {
      refreshModel: true
    }
  },

  model({search, tags_search}) 
  {
    if (search) {
      return this.store.query('book', {
        q: search
      });
    } else if (tags_search) {
      return this.store.query("book", {
        tags_search
      });

    } else if (search && tags_search) {
      return this.store.query("book", {
        search,
        tags_search
      });
    } else {
      return this.store.findAll('book');
    }
  },
});
