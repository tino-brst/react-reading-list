import React, { useState } from 'react';
import { useBooks } from '../contexts';
import { BooksActionCreator } from '../actions';

export function NewBookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const [, dispatch] = useBooks();

  function addBook(title, author) {
    dispatch(BooksActionCreator.add(title, author));
  }

  function clearFields() {
    setTitle('');
    setAuthor('');
  }

  function onSubmit(event) {
    event.preventDefault();
    addBook(title, author);
    clearFields();
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