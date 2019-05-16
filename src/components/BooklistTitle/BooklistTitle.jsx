import React from 'react';
import './BookListTitle.css';

const BookListTitle = (props) => {
  const { title } = props;

  // ^^ const title = props.title

  return <div className="header">{title}</div>;
};

export default BookListTitle;
