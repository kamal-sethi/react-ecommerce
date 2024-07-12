import LoginPage from "./features/pages/LoginPage";
import SignupPage from "./features/pages/SignupPage";
import CartPage from "./features/pages/CartPage";
import Checkout from "./features/pages/Checkout";
import ProductDetailPage from "./features/pages/ProductDetailPage";
import Home from "./features/pages/Home";
import Protected from "./features/auth/components/Protected";
import PageNotFound from "./features/pages/404";
import OrderSuccessPage from "./features/pages/OrderSuccess";
import UserOrders from "./features/user/Components/UserOrders";
import UserOrdersPage from "./features/pages/UserOrdersPage";
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
  {
    path: "order-success/:id",
    element: (
      <OrderSuccessPage></OrderSuccessPage>
    ),
  },
  {
    path: "/orders",
    element: (
      <UserOrdersPage></UserOrdersPage>
    ),
  },
  {
    path: "*",
    element: (
      <PageNotFound></PageNotFound>
    ),
  },
];
