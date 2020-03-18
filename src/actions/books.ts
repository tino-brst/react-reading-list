import { Action } from './Action'

const BooksActionType = Object.freeze({
  add: 'books/ADD',
  remove: 'books/REMOVE',
})

function add(title: string, author: string) {
  return new Action(BooksActionType.add, { title, author })
}

function remove(id: string) {
  return new Action(BooksActionType.remove, { id })
}

const BooksActionCreator = {
  add,
  remove,
}

export { BooksActionType, BooksActionCreator }
