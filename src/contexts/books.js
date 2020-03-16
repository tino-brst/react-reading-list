import React, { createContext, useContext } from 'react';
import { LocalStorageItemKey } from '../constants'
import { booksReducer } from '../reducers'
import { useLocallyStoredReducer } from '../utils/local-storage'

const BooksContext = createContext();
BooksContext.displayName = 'BooksContext';

function BooksProvider({ children }) {
  const [books, dispatch] = useLocallyStoredReducer(LocalStorageItemKey.books, booksReducer, []);

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