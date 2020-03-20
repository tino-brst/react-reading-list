import { v4 as uuid } from 'uuid'
import { BooksActionType, BooksAction } from '../actions'
import { Book } from '../models'

export function booksReducer(books: Book[], action: BooksAction): Book[] {
  switch (action.type) {
    case BooksActionType.add:
      const { title, author } = action.payload
      return [...books, new Book(title, author, uuid())]
    case BooksActionType.remove:
      const { id } = action.payload
      return books.filter((book) => book.id !== id)
  }
}
