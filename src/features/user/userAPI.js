// A mock function to mimic making an async request for data
export function fetchLoggedInUserOrders(userId) {
  return new Promise(async (resolve) => {
    console.log(userId);
    const response = await fetch(
      "http://localhost:8080/orders?user.id=" + userId
    );
    console.log(response);
    const data = await response.json();
    resolve({ data });
  });
}
export function fetchLoggedInUser(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/users/" + userId);
    const data = await response.json();
    resolve({ data });
  });
}

export function updateUserAddress(update) {
  return new Promise(async (resolve) => {
    console.log(update);
    const response = await fetch("http://localhost:8080/users/" + update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "content-type": "application/json" },
    });
    //todo:in server we will only get relevant info of user(not password)
    const data = await response.json();
    resolve({ data });
  });
}
