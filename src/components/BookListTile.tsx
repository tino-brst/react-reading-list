import React from 'react'
import { Book } from '../models'

type Props = {
  book: Book
  onClick: React.MouseEventHandler
}

export const BookListTile: React.FunctionComponent<Props> = ({
  book,
  onClick,
}) => {
  return (
    <li className="BookListTile" onClick={onClick}>
      {book.title} - {book.author}
    </li>
  )
}
