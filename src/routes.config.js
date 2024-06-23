import LoginPage from "./features/pages/LoginPage";
import SignupPage from "./features/pages/SignupPage";
import CartPage from "./features/pages/CartPage";
import Checkout from "./features/pages/Checkout";
import ProductDetailPage from "./features/pages/ProductDetailPage";
import Home from "./features/pages/Home";
import Protected from "./features/auth/components/Protected";
export const routes = [
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/",
    element: (
      <Protected>
        <Home></Home>
      </Protected>
    ),
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/cart",
    element: (
      <Protected>
        <CartPage></CartPage>
      </Protected>
    ),
  },
  {
    path: "/checkout",
    element: (
      <Protected>
        <Checkout></Checkout>
      </Protected>
    ),
  },
  {
    path: "/product-details/:id",
    element: (
      <Protected>
        <ProductDetailPage></ProductDetailPage>
      </Protected>
    ),
  },
];
