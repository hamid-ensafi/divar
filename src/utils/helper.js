

function localStorageCity() {
  return JSON.parse(localStorage.getItem("city")).map((value) => value.id);
}

function numberFormat(number) {
  return new Intl.NumberFormat("fa-IR").format(number);
}

function Find(CategoryData,id) {
  return CategoryData.slice().find((item) => item.id === +id)
}
export { localStorageCity, numberFormat,Find };
