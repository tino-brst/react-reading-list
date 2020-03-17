import React from 'react'

export function BookListTile({ book, onClick }) {
  return (
    <li className="BookListTile" onClick={onClick}>
      {book.title} - {book.author}
    </li>
  )
}
