// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    //TODO: we will not hardcode server url here
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    console.log(data);
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter) {
 
  let queryString = "";
  for (let key in filter) {
    queryString += `${key}=${filter[key]}&`;
  }
  console.log(queryString);
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:8080/products?"+queryString
    );
   console.log(response);
    const data = await response.json();
    resolve({ data });
    console.log(data);
  });
}
