import React, { createContext, useReducer, useEffect, useContext } from 'react';
import { LocalStorageItemKey } from '../constants'
import { booksReducer } from '../reducers'
import { useLocalStorage } from '../utils/local-storage'

const BooksContext = createContext();
BooksContext.displayName = 'BooksContext';

function BooksProvider({ children }) {
  const [localBooks, setLocalBooks] = useLocalStorage(LocalStorageItemKey.books, []);
  const [books, dispatch] = useReducer(booksReducer, localBooks);

  useEffect(() => {
    setLocalBooks(books);
  }, [books, setLocalBooks])

  return (
    <BooksContext.Provider value={[books, dispatch]} >
      {children}
    </BooksContext.Provider>
  )
}

function useBooks() {
  const context = useContext(BooksContext);
  if (context === undefined) {
    throw new Error('useBooks must be used within a BooksProvider')
  }
  return context;
}

export {
  BooksProvider,
  useBooks
};