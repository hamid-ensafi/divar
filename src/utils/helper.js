function localStorageCity() {
  return JSON.parse(localStorage.getItem("city")).map((value) => value.id);
}
export { localStorageCity}