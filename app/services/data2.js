import Service from '@ember/service';

export default Service.extend({
  getBooks(search) {
    let queryParams = '';
    if(search)
    {
      queryParams=`?q=${search}`;
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

  getSpeakers() {
    return fetch(`http://localhost:3000/speakers`).then((response) => response.json());
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
  }
});
