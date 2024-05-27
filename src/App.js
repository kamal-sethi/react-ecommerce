import "./App.css";
import Home from "./features/pages/Home";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import LoginPage from "./features/pages/LoginPage";
import SignupPage from "./features/pages/SignupPage";
import Cart from "./features/cart/Cart";
import CartPage from "./features/pages/CartPage";
import Checkout from "./features/pages/Checkout";

const router = createBrowserRouter([
  {
   path:"/login",
   element:<LoginPage></LoginPage>,
  },
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path:'/cart',
    element:<CartPage></CartPage>
  },
  {
    path:'/checkout',
    element:<Checkout></Checkout>
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
