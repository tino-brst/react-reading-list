import React, { useEffect, useReducer, useState } from 'react'

function getLocalStorageValue(key: string, initialValue?: any) {
  const existingRawValue = localStorage.getItem(key)

  if (existingRawValue !== null) {
    return JSON.parse(existingRawValue)
  } else if (initialValue !== undefined) {
    setLocalStorageValue(key, initialValue)
    return initialValue
  } else {
    return null
  }
}

function setLocalStorageValue(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value))
}

function useLocallyStoredState<I>(key: string, initialState: I) {
  const [state, setState] = useState<I>(() =>
    getLocalStorageValue(key, initialState),
  )

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
    (initialState) => getLocalStorageValue(key, initialState),
  )

  useEffect(() => {
    setLocalStorageValue(key, state)
  }, [state, key])

  return [state, dispatch] as const
}

export { useLocallyStoredState, useLocallyStoredReducer }
