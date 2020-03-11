import React, { useContext } from 'react';
import { BooksContext } from '../contexts';
import { BookListTile } from './BookListTile';
import { BooksActionCreator } from '../actions';

// TODO add an empty state

export const BookList = () => {
  const { books, dispatch } = useContext(BooksContext);

  const removeBook = (id) => {
    dispatch(BooksActionCreator.remove(id))
  }

  return (
    <div className="BookList">
      <ul>
        {books.map((book) => (
          <BookListTile
            key={book.id}
            book={book}
            onClick={() => removeBook(book.id)}
          />
        ))}
      </ul>
    </div>
  );
}
