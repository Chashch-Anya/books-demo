import Service from '@ember/service';

export default Service.extend({
  getBooks(search,search_tag) {
    let queryParams = '';
    if(search && search_tag)
    {
      queryParams=`?q=${search}&tags_like=${search_tag}`;
    }
    else if(search)
    {
      queryParams=`?q=${search}`;
    } else if(search_tag)
    {
      queryParams=`?q=${search_tag}`
    }
    return fetch(`http://localhost:3000/books${queryParams}`).then((response) => response.json());
  },
  getBook(id) {
    return fetch(`http://localhost:3000/books/${id}`).then((response) => response.json());
  },
  deleteBook(book) {
    return fetch(`http://localhost:3000/books/${book.id}`, {
      method: 'DELETE'
    });
  },
  createBook(book) {
    return fetch(`http://localhost:3000/books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    });
  },
  updateBook(book) {
    return fetch(`http://localhost:3000/books/${book.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    });
  },

  getSpeakers(search) {
    let queryParams = '';
    if(search)
    {
      queryParams=`?q=${search}`;
    }

    return fetch(`http://localhost:3000/speakers${queryParams}`).then((response) => response.json());
  },
  getSpeaker(id) {
    return fetch(`http://localhost:3000/speakers/${id}`).then((response) => response.json());
  },
  deleteSpeaker(speaker) {
    return fetch(`http://localhost:3000/speakers/${speaker.id}`, {
      method: 'DELETE'
    });
  },
  createSpeaker(speaker) {
    return fetch(`http://localhost:3000/speakers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(speaker)
    });
  },
  updateSpeaker(speaker) {
    return fetch(`http://localhost:3000/speakers/${speaker.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(speaker)
    });
  },
  getMeetings(search) {
    let queryParams = '';
    if(search)
    {
      queryParams=`?q=${search}`;
    }

    return fetch(`http://localhost:3000/meetings${queryParams}`).then((response) => response.json());
  },
});
