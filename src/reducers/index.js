import { ADD_BOOK, LOAD_BOOKS } from '../actions';

const initialState = {
  books: [
    // {
    //   title: 'Of Mice and Men',
    //   author: 'John Steinbeck',
    // },
    // {
    //   title: 'Deception Well',
    //   author: 'Linda nagata',
    // },
    // {
    //   title: 'The Catcher in the Rye',
    //   author: 'J.D. Salinger',
    // },
  ],
  isLoggedIn: true,
};

function bookReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return Object.assign({}, state, { books: [...state.books, action.payload] });
    case LOAD_BOOKS:
      return Object.assign({}, { books: [...action.payload] });
    default:
      return state;
  }
}

export default bookReducer;

//  ... = a spread operator
