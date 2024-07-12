// A mock function to mimic making an async request for data
export function fetchLoggedInUserOrders(userId) {
  return new Promise(async (resolve) => {
    console.log(userId)
    const response = await fetch("http://localhost:8080/orders?user.id=" +userId);
    console.log(response);
    const data = await response.json();
    resolve({ data });
  });
}
