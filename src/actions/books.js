import { Action } from './Action'

const BooksActionType = Object.freeze({
  add: 'books/ADD',
  remove: 'books/REMOVE',
})

function add(title, author) {
  return new Action(BooksActionType.add, { title, author })
}

function remove(id) {
  return new Action(BooksActionType.remove, { id })
}

const BooksActionCreator = {
  add,
  remove,
}

export { BooksActionType, BooksActionCreator }
