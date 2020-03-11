import React, { createContext, useReducer, useEffect, useContext } from 'react';
import { LocalStorageItemKey } from '../constants'
import { booksReducer } from '../reducers'

const BooksContext = createContext();
BooksContext.displayName = 'BooksContext';

const booksInitializer = (initialValue) => {
  const storedBooks = getItemFromLocalStorage(LocalStorageItemKey.books);
  return storedBooks === null ? initialValue : storedBooks;
};

const BooksProvider = ({ children }) => {
  const [books, dispatch] = useReducer(booksReducer, [], booksInitializer);

  useEffect(() => {
    saveItemToLocalStorage(LocalStorageItemKey.books, books);
  }, [books])

  return (
    <BooksContext.Provider value={[books, dispatch]} >
      {children}
    </BooksContext.Provider>
  )
}

const useBooks = () => {
  const context = useContext(BooksContext);
  if (context === undefined) {
    throw new Error('useBooks must be used within a BooksProvider')
  }
  return context;
}

// TODO move to utils file

const getItemFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
}

const saveItemToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export {
  BooksProvider,
  useBooks
};