import React from 'react';
import { useBooks, useTheme } from '../contexts';
import { ThemeSelect } from './ThemeSelect';
import { NewBookForm } from './NewBookForm';

export const Navbar = () => {
  const [books] = useBooks();
  const [theme, setTheme] = useTheme();

  return (
    <nav className="Navbar">
      <ThemeSelect value={theme} onChange={(event) => setTheme(event.target.value)} />
      <h1>My Reading List</h1>
      <h3>{books.length} books to go</h3>
      <NewBookForm />
    </nav>
  );
}