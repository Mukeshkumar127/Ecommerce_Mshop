import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../customer/Pages/HomePage/HomePage";
import Cart from "../customer/components/Cart/Cart";
import Product from "../customer/components/Product/Product";
import ProductDetails from "../customer/components/ProductDetails/ProductDetails";
import Checkout from "../customer/components/Checkout/Checkout";
import Navigation from "../customer/components/Navigation/Navigation";
import Footer from "../customer/components/Footer/Footer";
import PaymentSuccess from "../customer/components/Payment/PaymentSuccess";

const CustomerRouters = () => {
  return (
    <div>
      <div>
        <Navigation/>
      </div>

      <Routes>
        <Route path='/login' element={<HomePage/>}></Route>
        <Route path='/register' element={<HomePage/>}></Route>


        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>

        <Route path="/:lavelOne/:lavelTwo/:lavelThree" element={<Product/>}></Route>

        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        
        <Route path="/checkout" element={<Checkout />}></Route>

        <Route path="/payment/:orderId" element={<PaymentSuccess/>}></Route>

      </Routes>

      <div>
      <Footer />
      </div>


    </div>
  );
};

export default CustomerRouters;
