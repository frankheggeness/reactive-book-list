import React, { Component } from 'react';
import Book from '../../components/Book';

class BookList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const { value } = e.target;
    this.setState({ input: value });
  }

  render() {
    const input = this.state.input;
    const bookList = this.props.books
      .filter((book) => {
        return book.title.toLowerCase().includes(input.toLowerCase());
      })
      .map((book, idx) => {
        return <Book key={idx} title={book.title} author={book.author} />;
      });
    return (
      <>
        <input type="text" value={this.state.input} onChange={this.handleInputChange} />
        {bookList}
      </>
    );
  }
}

export default BookList;
