import { useEffect, useReducer } from 'react';

function getLocalStorageValue(key) {
  return JSON.parse(localStorage.getItem(key));
}

function setLocalStorageValue(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function useLocallyStoredState(key, initialState) {
  // A reducer that returns whatever action it receives, replacing the previous state
  // with the actions value (which becomes the new state).
  const reducer = (_, newState) => newState;

  // The returned dispatch function passes whatever we send it through our reducer, working
  // just like the classic setState function, which replaces the current state with the value passed.
  // So: dispatch(action) calls reducer(prevState, action), which returns the action and
  // becomes the new state.
  return useLocallyStoredReducer(key, reducer, initialState);
}

function useLocallyStoredReducer(key, reducer, initialState) {
  const [state, dispatch] = useReducer(reducer, initialState, (initialState) => {
    const existingState = getLocalStorageValue(key);
    if (existingState === null) {
      setLocalStorageValue(key, initialState);
      return initialState;
    } else {
      return existingState;
    }
  });

  useEffect(() => {
    setLocalStorageValue(key, state);
  }, [state, key])

  return [state, dispatch];
}

export {
  useLocallyStoredState,
  useLocallyStoredReducer
}