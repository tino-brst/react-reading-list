import React, { useState, useReducer, useEffect } from 'react';
import { Theme, LocalStorageItemKey } from './constants';
import { BooksContext, ThemeContext } from './contexts';
import { Navbar, BookList } from './components';
import { booksReducer } from './reducers';

export const App = () => {
  const [theme, setTheme] = useState(Theme.light);
  const [books, dispatch] = useReducer(booksReducer, [], booksInitializer);

  useEffect(() => {
    saveItemToLocalStorage(LocalStorageItemKey.books, books);
  }, [books])

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

const booksInitializer = (initialValue) => {
  const storedBooks = getItemFromLocalStorage(LocalStorageItemKey.books);
  return storedBooks === null ? initialValue : storedBooks;
};

// TODO move to utils file

const getItemFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
}

const saveItemToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}