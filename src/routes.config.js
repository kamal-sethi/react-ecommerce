import LoginPage from "./features/pages/LoginPage";
import SignupPage from "./features/pages/SignupPage";
import Cart from "./features/cart/Cart";
import CartPage from "./features/pages/CartPage";
import Checkout from "./features/pages/Checkout";
import ProductDetails from "./features/productList/components/ProductDetails";
import ProductDetailPage from "./features/pages/ProductDetailPage";
import Home from "./features/pages/Home";
export const routes=[
    {
      path: "/login",
      element: <LoginPage></LoginPage>,
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
      path: "/cart",
      element: <CartPage></CartPage>,
    },
    {
      path: "/checkout",
      element: <Checkout></Checkout>,
    },
    {
      path: "/product-details",
      element: <ProductDetailPage></ProductDetailPage>,
    },
  ]