import React, { useState, Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteItemFromCartAsync,
  increment,
  incrementAsync,
  productsInCart,
  selectCount,
  updateCartAsync,
} from "./cartSlice";
import { discountedPrice } from "../../app/constants";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon, StarIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { selectLoggedInUser } from "../auth/authSlice";
import { fetchAllProductByIdAsync } from "../productList/productSlice";
import { Navigate } from "react-router-dom";
// import { productsInCart } from "./cartSlice";

export default function Cart() {
  // const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  // const user = useSelector(selectLoggedInUser);

  const dispatch = useDispatch();
  const products = useSelector(productsInCart);
  const totalPrice = Math.ceil(
    products.reduce(
      (amount, item) => discountedPrice(item) * item.quantity + amount,
      0
    )
  );
  const totalItem = products.reduce((total, item) => item.quantity + total, 0);
  const handleQuantity = (e, product) => {
    dispatch(updateCartAsync({ ...product, quantity: +e.target.value }));
  };
  const handleDelete = (e, id) => {
    dispatch(deleteItemFromCartAsync(id));
  };
  return (
    <>
      {/* {!products.length && <Navigate to="/"></Navigate>} */}
      <div className="mx-auto mt-24  bg-white max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight py-5 text-gray-900">
          Cart
        </h1>
        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {products.map((product) => (
                <li key={product.id} className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={product.images}
                      alt={product.title}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <a href={product.href}>{product.title}</a>
                        </h3>
                        <p className="ml-4">${discountedPrice(product)}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        <StarIcon className="w-5 h-5 inline"></StarIcon>
                        {product.rating}
                      </p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <div className="text-black-500 font-medium">
                        Qty
                        <select
                          className="mx-2"
                          onChange={(e) => handleQuantity(e, product)}
                          value={product.quantity}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                        </select>
                      </div>

                      <div className="flex">
                        <button
                          type="button"
                          onClick={(e) => handleDelete(e, product.id)}
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div className="flex justify-between my-2 text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>${totalPrice}</p>
          </div>
          <div className="flex justify-between my-2 text-base font-medium text-gray-900">
            <p>Total Items in Cart</p>
            <p>{totalItem} Items</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="mt-6">
            <Link
              to="/checkout"
              className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Checkout
            </Link>
          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>
              or{" "}
              <Link to="/">
                <button
                  type="button"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                  onClick={() => setOpen(false)}
                >
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
