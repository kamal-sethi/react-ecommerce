import { Link } from "react-router-dom";

export const user = {
    name: "Tom Cook",
    email: "tom@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  };
 export  const navigation = [
    { name: "Dashboard", link: "#", user: true },
    { name: "Team", link: "#", user:true },
    { name: "Admin", link: "/admin", admin: true },
    { name: "Orders", link: "/admin/orders", admin: true },
  ];
 export  const userNavigation = [
    { name: "My Profile", link: "/profile" },
    { name: "My Orders", link: "/orders" },
    { name: "Sign out", link: "/logout" },
  ];
  