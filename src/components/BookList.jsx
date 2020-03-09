import React, { useContext } from 'react';
import { BooksContext } from '../contexts';
import { BookListTile } from './BookListTile';

export const BookList = () => {
  const { books, removeBook } = useContext(BooksContext);

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

// TODO add an empty state