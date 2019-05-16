// ACTION DEFINTION
export const ADD_BOOK = 'ADD_BOOK';
export const LOAD_BOOKS = 'LOAD_BOOKS';

// ACTION CREATOR
// export function addBook(newBook) {
//   // return {
//   //   type: ADD_BOOK,
//   //   payload: newBook,
//   // };
// }

export function addBook(newBook) {
  return (dispatch) => {
    // call out to server
    return fetch('/books', {
      method: 'POST',
      body: JSON.stringify(newBook),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        return dispatch({
          type: ADD_BOOK,
          payload: body,
        });
      });
  };
}

export const loadBooks = () => {
  return (dispatch) => {
    return fetch('/books')
      .then((response) => {
        return response.json();
      })
      .then((books) => {
        return dispatch({
          type: LOAD_BOOKS,
          payload: books,
        });
      });
  };
};

// export function userLoggedOut() {
//   return {
//     type: USER_LOGGED_OUT,
//     payload: undefinde,
//   };
// }
