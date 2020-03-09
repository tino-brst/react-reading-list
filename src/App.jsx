import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Book } from './models';
import { Theme } from './constants';
import { BooksContext, ThemeContext } from './contexts';
import { Navbar, BookList } from './components';

export const App = () => {
  const [theme, setTheme] = useState(Theme.light);

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
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <BooksContext.Provider value={{ books, addBook, removeBook }}>
        <div className="App">
          <Navbar />
          <BookList />
        </div>
      </BooksContext.Provider>
    </ThemeContext.Provider>
  );
}