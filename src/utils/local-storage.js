import { useState, useEffect } from "react";

function getLocalStorageValue(key) {
  return JSON.parse(localStorage.getItem(key));
}

function setLocalStorageValue(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const existingValue = getLocalStorageValue(key);
    if (existingValue === null) {
      setLocalStorageValue(key, initialValue);
      return initialValue;
    } else {
      return existingValue;
    }
  });

  useEffect(() => {
    setLocalStorageValue(key, value);
  }, [value, key])

  return [value, setValue];
}

export { useLocalStorage }