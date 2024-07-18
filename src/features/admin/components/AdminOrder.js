import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllOrdersAsync,
  selectAllOrders,
  selectTotalOrdersCount,
  updateOrderAsync,
} from "../../order/orderSlice";
import { ITEMS_PER_PAGE } from "../../../app/constants";
import { EyeIcon, PencilIcon } from "@heroicons/react/24/outline";
import { discountedPrice } from "../../../app/constants";

const AdminOrders = () => {
  // const orders = useSelector(selectAllOrders);
  // console.log(orders);
  const dispatch = useDispatch();
  const [editableOrderID, setEditableOrderID] = useState(-1);
  const [page, setPage] = useState(1);
  const orderCount = useSelector(selectTotalOrdersCount);
  const orders = useSelector(selectAllOrders);

  const handleShow = (order) => {
    console.log("show clicked");
  };

  const handleEdit = (order) => {
    console.log("edit clicked");
    setEditableOrderID(order.id);
  };

  const handleUpdate = (e, order) => {
    const update = { ...order, status: e.target.value };
    dispatch(updateOrderAsync(update));
    setEditableOrderID(-1);

  };
  const handleColor=(status)=>{
    switch(status){
      case 'pending':
        return 'bg-purple-200 text-purple-600'
      case 'dispatched':
        return 'bg-yellow-200 text-yellow-600'
      case 'delivered':
        return 'bg-green-200 text-green-600'
      case 'cancelled':
        return 'bg-red-200 text-red-600'

    }
  }
  console.log(orders);
  useEffect(() => {
    const pagination = { _page: page, _limit: ITEMS_PER_PAGE };
    dispatch(fetchAllOrdersAsync(pagination));
  }, [dispatch, page]);

  return (
    <>
      <>
        {/* component */}
        <div className="overflow-x-auto">
          <h1 className="mx-25 font-bold text-black text-3xl flex items-center justify-center ">
            Order Details
          </h1>
          <div className=" bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
            <div className="w-full">
              <div className="bg-white shadow-md rounded my-6">
                <table className="min-w-max w-full table-auto">
                  <thead>
                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                      <th className="py-3 px-6 text-left">Order Number</th>
                      <th className="py-3 px-6 text-left">Items</th>
                      <th className="py-3 px-6 text-center">Total Amount</th>
                      <th className="py-3 px-6 text-center">
                        Shipping Address
                      </th>
                      <th className="py-3 px-6 text-center">Status</th>
                      <th className="py-3 px-6 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 text-sm font-light">
                    {orders.map((order) => (
                      <tr className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-3 px-6 text-left whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="mr-2"></div>
                            <span className="font-medium">{order.id}</span>
                          </div>
                        </td>
                        <td className="py-3 px-6 text-left">
                          {order.products.map((item) => (
                            <div className="flex items-center">
                              <div className="mr-2">
                                <img
                                  className="w-6 h-6 rounded-full"
                                  src={item.thumbnail}
                                />
                              </div>
                              <span>
                                {item.title}-#{item.quantity}- $
                                {discountedPrice(item)}
                              </span>
                            </div>
                          ))}
                        </td>
                        <td className="py-3 px-6 text-center">
                          <div className="flex items-center justify-center">
                            <span>${order.totalPrice}</span>
                          </div>
                        </td>
                        <td className="py-3 px-6 text-center">
                          <div className="items-center justify-center">
                            <div>
                              <strong>{order.selectedAddress.name},</strong>
                            </div>
                            <div> {order.selectedAddress.email},</div>
                            <div> {order.selectedAddress.street},</div>
                            <div> {order.selectedAddress.city},</div>
                            <div>{order.selectedAddress.mobileNo},</div>
                            <div> {order.selectedAddress.pinCode}</div>
                          </div>
                        </td>

                        <td className="py-3 px-6 text-center">
                          {order.id === editableOrderID ? (
                            <select onChange={(e) => handleUpdate(e, order)}>
                              <option value="pending">Pending</option>
                              <option value="dispatched">Dispatched</option>
                              <option value="delivered">Delivered</option>;
                              <option value="cancelled">Cancelled</option>;
                            </select>
                          ) : (
                            <span
                              className={`${handleColor(
                                order.status
                              )}py-1 px-3 rounded-full text-xs`}
                            >
                              {order.status}
                            </span>
                          )}
                        </td>
                        <td className="py-3 px-6 text-center">
                          <div className="flex item-center justify-center">
                            <div className="w-6 h-6 mr-2 transform hover:text-purple-500 hover:scale-110">
                              <EyeIcon
                                onClick={(e) => handleShow(order)}
                              ></EyeIcon>
                            </div>
                            <div className="w-6 h-6 mr-2 transform hover:text-purple-500 hover:scale-110">
                              <PencilIcon
                                onClick={(e) => handleEdit(order)}
                              ></PencilIcon>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* <Pagination></Pagination> */}
        </div>
      </>
    </>
  );
};

export default AdminOrders;
