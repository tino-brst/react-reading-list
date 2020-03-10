import { Action } from './Action'

const BooksActionType = Object.freeze({
  add: 'books/ADD',
  remove: 'books/REMOVE'
});

const add = (title, author) => new Action(
  BooksActionType.add,
  { title, author }
);

const remove = (id) => new Action(
  BooksActionType.remove,
  { id }
);

const BooksActionCreator = {
  add,
  remove
}

export {
  BooksActionType,
  BooksActionCreator
};