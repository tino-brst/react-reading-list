import React, { useState, useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import { Book } from './models';
import { Theme } from './constants';
import { BooksContext, ThemeContext } from './contexts';
import { Navbar, BookList } from './components';
import { booksReducer } from './reducers';

export const App = () => {
  const [theme, setTheme] = useState(Theme.light);

  const [books, dispatch] = useReducer(booksReducer, [
    new Book('Foundation', 'Isaac Asimov', uuid()),
    new Book('The Martian', 'Andy Weir', uuid()),
  ]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <BooksContext.Provider value={{ books, dispatch }}>
        <div className="App">
          <Navbar />
          <BookList />
        </div>
      </BooksContext.Provider>
    </ThemeContext.Provider>
  );
}