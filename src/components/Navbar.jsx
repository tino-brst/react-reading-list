import React, { useContext } from 'react';
import { BooksContext, ThemeContext } from '../contexts';
import { ThemeSelect } from './ThemeSelect';
import { NewBookForm } from './NewBookForm';

export const Navbar = () => {
  const { books } = useContext(BooksContext);
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <nav className="Navbar">
      <ThemeSelect value={theme} onChange={(event) => setTheme(event.target.value)} />
      <h1>My Reading List</h1>
      <h3>{books.length} books to go</h3>
      <NewBookForm />
    </nav>
  );
}