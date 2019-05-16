import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import { addBook } from '../../actions';

class AddBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      author: '',
    };
    this.titleInputRef = createRef();

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.titleInputRef.current.focus();
  }

  handleTitleChange(e) {
    const { value } = e.target;
    this.setState({ title: value });
  }

  handleAuthorChange(e) {
    const { value } = e.target;
    this.setState({ author: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title, author } = this.state;

    this.props.addBook({
      title,
      author,
    });

    this.setState({
      title: '',
      author: '',
    });

    this.titleInputRef.current.focus();
  }

  render() {
    return (
      <form>
        <input type="text" value={this.state.title} onChange={this.handleTitleChange} ref={this.titleInputRef} />
        <input type="text" value={this.state.author} onChange={this.handleAuthorChange} />

        <button onClick={this.handleSubmit}>Save Book</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBook: (book) => {
      const addBookAction = addBook(book);
      dispatch(addBookAction);
    },
  };
};

AddBook = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddBook);

// ^^^ ===
// const newFunction = connect(mapStateToProps, mapDispatchToProps);
// newFunction(AddBooK)

export default AddBook;
