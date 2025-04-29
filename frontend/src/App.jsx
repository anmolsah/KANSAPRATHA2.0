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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
