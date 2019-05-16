import React from 'react';
import './App.css';
import BookListTitle from './components/BooklistTitle';
import BookList from './containers/BookList';
import AddBook from './containers/AddBook';
import { connect } from 'react-redux';
import { loadBooks } from './actions';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Reactive Book List',
    };
  }

  componentDidMount() {
    console.log(this.props);
    return this.props.loadBooks();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <UserLoggedIn loggedIn={this.props.length} /> */}
          <BookListTitle title={this.state.title} />
        </header>

        <div className="booklist-container">
          <BookList books={this.props.books} />
        </div>

        <div className="add-book-form">
          {/* <Consumer context> */}
          <AddBook />
          {/* </Consumer> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.bookReducer.books,
    // or
    // ...state
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    loadBooks: () => {
      return dispatch(loadBooks());
    },
  };
};

App = connect(
  mapStateToProps,
  mapDispatchtoProps,
)(App);

export default App;
