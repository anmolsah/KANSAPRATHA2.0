import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shops from "./pages/Shops";
import Card from "./pages/Card";
import Shipping from "./pages/Shipping";
import Details from "./pages/Details";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useDispatch } from "react-redux";
import { get_category } from "./store/reducers/homeReducer";
import CategoryShop from "./pages/CategoryShop";
import SearchProducts from "./pages/SearchProducts";
import Payment from "./pages/Payment";
import Dashboard from "./pages/Dashboard";
import ProtectUser from "./utils/ProtectUser";
import Index from "./components/dashboard/Index";
import Orders from "./components/dashboard/Orders";
import ChangePassword from "./components/dashboard/ChangePassword";
import Wishlist from "./components/dashboard/Wishlist";
import OrderDetails from "./components/dashboard/OrderDetails";
import ConfirmOrder from "./pages/ConfirmOrder";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AllBlogPosts from "./components/AllBlogPosts";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_category());
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/card" element={<Card />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/product/details/:slug" element={<Details />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products?" element={<CategoryShop />} />
        <Route path="/products/search?" element={<SearchProducts />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/order/confirm?" element={<ConfirmOrder />} />

        <Route path="/blog" element={<ProtectUser />}>
          <Route path="" element={<Blog />} />
          <Route path="all" element={<AllBlogPosts />} />
        </Route>
        <Route path="/about" element={<ProtectUser />}>
          <Route path="" element={<About />} />
        </Route>
        <Route path="/contact" element={<ProtectUser />}>
          <Route path="" element={<Contact />} />
        </Route>

        <Route path="/dashboard" element={<ProtectUser />}>
          <Route path="" element={<Dashboard />}>
            <Route path="" element={<Index />} />
            <Route path="my-orders" element={<Orders />} />
            <Route path="change-password" element={<ChangePassword />} />
            <Route path="my-wishlist" element={<Wishlist />} />
            <Route path="order/details/:orderId" element={<OrderDetails />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
