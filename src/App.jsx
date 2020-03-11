import React, { useReducer, useEffect } from 'react';
import { LocalStorageItemKey } from './constants';
import { BooksContext } from './contexts';
import { Navbar, BookList } from './components';
import { booksReducer } from './reducers';

export const App = () => {
  const [books, dispatch] = useReducer(booksReducer, [], booksInitializer);

  useEffect(() => {
    saveItemToLocalStorage(LocalStorageItemKey.books, books);
  }, [books])

  return (
    <BooksContext.Provider value={{ books, dispatch }}>
      <div className="App">
        <Navbar />
        <BookList />
      </div>
    </BooksContext.Provider>
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