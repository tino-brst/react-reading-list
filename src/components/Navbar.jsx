import React, { useContext } from 'react';
import { BooksContext } from '../contexts/BooksContext';
import { NewBookForm } from './NewBookForm';

export const Navbar = () => {
  const { books } = useContext(BooksContext);

  return (
    <nav className="Navbar">
      <h1>My Reading List</h1>
      <h3>{books.length} books to go</h3>
      <NewBookForm />
    </nav>
  );
}