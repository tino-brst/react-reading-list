import { v4 as uuid } from 'uuid';
import { BooksActionType } from '../actions'
import { Book } from '../models'

export const booksReducer = (books, action) => {
  switch (action.type) {
    case BooksActionType.add:
      const { title, author } = action.payload;
      return [...books, new Book(title, author, uuid())];
    case BooksActionType.remove:
      const { id } = action.payload;
      return books.filter((book) => book.id !== id);
    default:
      return books;
  }
}
