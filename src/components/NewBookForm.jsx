import React, { useContext, useState } from 'react';
import { BooksContext } from '../contexts/BooksContext';

export const NewBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const { addBook } = useContext(BooksContext);

  const onSubmit = (event) => {
    event.preventDefault();
    addBook(title, author);
    setTitle('');
    setAuthor('');
  }

  const isFormDataValid = title.trim() !== '' && author.trim() !== '';

  return (
    <form
      className="NewBookForm"
      onSubmit={onSubmit}
    >
      <fieldset>
        <legend>New Book</legend>
        <input
          type="text"
          value={title}
          placeholder="title"
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="text"
          value={author}
          placeholder="author"
          onChange={(event) => setAuthor(event.target.value)}
        />
        <input
          type="submit"
          disabled={!isFormDataValid}
          value="+ add"
        />
      </fieldset>
    </form>
  );
}