import React from 'react';
import { BooksProvider } from './contexts';
import { Navbar, BookList } from './components';

export const App = () => {
  return (
    <div className="App">
      <BooksProvider>
        <Navbar />
        <BookList />
      </BooksProvider>
    </div>
  );
}