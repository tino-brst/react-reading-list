import { Action } from './action'

export enum BooksActionType {
  add = 'books/ADD',
  remove = 'books/REMOVE',
}

export function addBook(title: string, author: string) {
  return new Action(BooksActionType.add, { title, author })
}

export function removeBook(id: string) {
  return new Action(BooksActionType.remove, { id })
}

export type BooksAction =
  | ReturnType<typeof addBook>
  | ReturnType<typeof removeBook>
