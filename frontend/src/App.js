import React from "react";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import SingleProduct from "./screens/SingleProduct";
import Login from "./screens/Login";
import Register from "./screens/Register";
import CartScreen from "./screens/CartScreen";
import ShippingScreen from "./screens/ShippingScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import NotFound from "./screens/NotFound";
import  ProtectedRoute  from "./screens/ProtectedRoute"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" index element={<HomeScreen/>} />
        <Route path="products/:id" element={<SingleProduct/>}/>
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>}/>
        <Route path="profile" element={<ProfileScreen/>}/>
        <Route path="cart/:id?" element={<CartScreen/>}/>
        <Route path="shipping" element={<ProtectedRoute>
          <ShippingScreen/>
          </ProtectedRoute>}/>
        <Route path="payment" element={<PaymentScreen/>}/>
        <Route path="placeorder"element={<PlaceOrderScreen/>}/>
        <Route path="order/:id" element={<OrderScreen/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  );
};

export default App;
