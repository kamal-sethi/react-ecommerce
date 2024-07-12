// A mock function to mimic making an async request for data
export function addToCart(item) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/cart", {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "content-type": "application/json" },
    });
    //todo:in server we will only get relevant info of user(not password)
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchItemByUserId(userId) {
  return new Promise(async (resolve) => {
    //TODO: we will not hardcode server url here
    const response = await fetch("http://localhost:8080/cart?user=" + userId);
    const data = await response.json();

    resolve({ data });
  });
}

export function updateCart(update) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/cart/" + update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "content-type": "application/json" },
    });
    //todo:in server we will only get relevant info of user(not password)
    const data = await response.json();
    console.log(data);
    resolve({ data });
  });
}

export function deleteItemFromCart(itemId) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/cart/" + itemId, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    });
    //todo:in server we will only get relevant info of user(not password)
    const data = await response.json();
    console.log(data);
    resolve({ data:{id:itemId} });
  });
}


export function resetCart(userId){
  return new Promise(async(resolve)=>{
    console.log(userId)
    const response=await fetchItemByUserId(userId)
    console.log(response);
    const items=response.data;
    console.log(items);
    for(let item of items)
    {
      console.log(item.id)
      deleteItemFromCart(item.id);
    }
    resolve({status:'success'});
  })
}