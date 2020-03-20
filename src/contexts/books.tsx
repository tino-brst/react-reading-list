import React from 'react'
import { LocalStorageItemKey } from '../constants'
import { booksReducer } from '../reducers'
import { useLocallyStoredReducer } from '../utils/local-storage'
import { Book } from '../models'
import { BooksAction } from '../actions'

// TODO rename to BooksStore (as convention for contexts that provide [state, dispatch])

type BooksContextValue = [Book[], React.Dispatch<BooksAction>] | undefined

const BooksContext = React.createContext<BooksContextValue>(undefined)
BooksContext.displayName = 'BooksContext'

type Props = {
  children: React.ReactNode
}

function BooksProvider({ children }: Props) {
  const [books, dispatch] = useLocallyStoredReducer(
    LocalStorageItemKey.books,
    booksReducer,
    [],
  )

  return (
    <BooksContext.Provider value={[books, dispatch]}>
      {children}
    </BooksContext.Provider>
  )
}

function useBooks() {
  const context = React.useContext(BooksContext)
  if (context === undefined) {
    throw new Error('useBooks must be used within a BooksProvider')
  }
  return context
}

export { BooksProvider, useBooks }
