import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import { routes } from "./routes.config";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUser } from "./features/auth/authSlice";
import { useEffect } from "react";
import { fetchItemByUserIdAsync } from "./features/cart/cartSlice";

const router = createBrowserRouter(routes);

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  useEffect(() => {
    if (user) {
      dispatch(fetchItemByUserIdAsync(user.id));
    }
  }, [dispatch,user?.id]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
