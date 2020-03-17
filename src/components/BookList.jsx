import React from 'react'
import { useBooks } from '../contexts'
import { BookListTile } from './BookListTile'
import { BooksActionCreator } from '../actions'

// TODO add an empty state

export function BookList() {
  const [books, dispatch] = useBooks()

  function removeBook(id) {
    dispatch(BooksActionCreator.remove(id))
  }

  return (
    <div className="BookList">
      <ul>
        {books.map((book) => (
          <BookListTile
            key={book.id}
            book={book}
            onClick={() => removeBook(book.id)}
          />
        ))}
      </ul>
    </div>
  )
}
