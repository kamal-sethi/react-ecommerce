// A mock function to mimic making an async request for data
export function createUser(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/users", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "content-type": "application/json" },
    });
    //todo:in server we will only get relevant info of user(not password)
    const data = await response.json();
    resolve({ data });
  });
}

export function checkUser(loginInfo) {
  return new Promise(async (resolve, reject) => {
    const email = loginInfo.email;
    const password = loginInfo.password;
    //todo:in server we will only get relevant info of user(not password)
    const response = await fetch("http://localhost:8080/users?email=" + email);
    const data = await response.json();
    console.log({ data });
    if (data.length) {
      if (password === data[1].password) {    
        console.log(data[1].password);
        resolve({ data: data[1]});
      } else {
        reject({ message: "wrong credentials" });
      }
    } else {
      reject({ message: "user not found" });
    }
  });
}



