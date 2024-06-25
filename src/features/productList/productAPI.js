// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    //TODO: we will not hardcode server url here
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();

    resolve({ data });
  });
}

export function fetchProductById(id) {
  return new Promise(async (resolve) => {
    //TODO: we will not hardcode server url here
    const response = await fetch("http://localhost:8080/products/" + id);

    console.log(response);

    const data = await response.json();

    resolve({ data });
  });
}

export function fetchProductsByFilters(filter, sort, pagination) {
  let queryString = "";
  for (let key in filter) {
    const categoryValues = filter[key];

    if (categoryValues.length) {
      const lastCategoryValue = categoryValues[categoryValues.length - 1];

      queryString += `${key}=${lastCategoryValue}&`;
    }
  }
  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }
  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }

  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:8080/products?" + queryString
    );

    const info = await response.json();

    resolve(info.data);
  });
}
