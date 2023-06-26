import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import AddProduct from "./pages/product/AddProduct";
import Product from "./pages/home/Home";
import ProtectedRoute from "./components/protected_route";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route
          path="addProduct"
          element={
            <ProtectedRoute>
              <AddProduct />
            </ProtectedRoute>
          }
        />
        <Route
          path="getProduct"
          element={
            <ProtectedRoute>
              <Product />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
