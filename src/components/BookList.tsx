import React from 'react'
import { useBooks } from '../contexts'
import { BookListTile } from './BookListTile'
import { removeBook } from '../actions'

// TODO add an empty state

export const BookList: React.FunctionComponent = () => {
  const [books, dispatch] = useBooks()

  return (
    <div className="BookList">
      <ul>
        {books.map((book) => (
          <BookListTile
            key={book.id}
            book={book}
            onClick={() => dispatch(removeBook(book.id))}
          />
        ))}
      </ul>
    </div>
  )
}
