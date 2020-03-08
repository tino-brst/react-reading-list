import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { BooksContext } from './contexts/BooksContext';
import { Book } from './models/Book';
import { Navbar } from './components/Navbar';

export const App = () => {
  const [books, setBooks] = useState([
    new Book('Foundation', 'Isaac Asimov', uuid()),
    new Book('The Martian', 'Andy Weir', uuid()),
  ]);

  const addBook = (title, author) => {
    setBooks([...books, new Book(title, author, uuid())]);
  }
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  }

  return (
    <div className="App">
      <BooksContext.Provider value={[books, addBook, removeBook]}>
        <Navbar />
      </BooksContext.Provider>
    </div>
  );
}