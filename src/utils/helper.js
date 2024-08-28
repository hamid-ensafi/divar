

function localStorageCity() {
  return JSON.parse(localStorage.getItem("city")).map((value) => value.id);
}

function numberFormat(number) {
  return new Intl.NumberFormat("fa-IR").format(number);
}


export { localStorageCity, numberFormat };
