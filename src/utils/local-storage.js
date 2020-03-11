function getItemFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function saveItemToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

export {
  getItemFromLocalStorage,
  saveItemToLocalStorage
}

