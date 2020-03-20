import React, { useEffect, useReducer, useState } from 'react'

// TODO add optional initialValue to set in case of not found, refactor hooks
function getLocalStorageValue(key: string) {
  const rawValue = localStorage.getItem(key)
  if (rawValue !== null) return JSON.parse(rawValue)
  return null
}

function setLocalStorageValue(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value))
}

function useLocallyStoredState<I>(key: string, initialState: I) {
  const [state, setState] = useState<I>(() => {
    const existingState = getLocalStorageValue(key)
    if (existingState === null) {
      setLocalStorageValue(key, initialState)
      return initialState
    } else {
      return existingState
    }
  })

  useEffect(() => {
    setLocalStorageValue(key, state)
  }, [state, key])

  return [state, setState] as const
}

function useLocallyStoredReducer<R extends React.Reducer<any, any>, I>(
  key: string,
  reducer: R,
  initialState: I,
) {
  const [state, dispatch] = useReducer<R, I>(
    reducer,
    initialState,
    (initialState) => {
      const existingState = getLocalStorageValue(key)
      if (existingState === null) {
        setLocalStorageValue(key, initialState)
        return initialState
      } else {
        return existingState
      }
    },
  )

  useEffect(() => {
    setLocalStorageValue(key, state)
  }, [state, key])

  return [state, dispatch] as const
}

export { useLocallyStoredState, useLocallyStoredReducer }
