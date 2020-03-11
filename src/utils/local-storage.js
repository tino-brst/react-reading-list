const getItemFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
}

const saveItemToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export {
  getItemFromLocalStorage,
  saveItemToLocalStorage
}

