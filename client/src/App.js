import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import LandingScreen from "./screens/LandingScreen";
import CheckoutScreen from "./screens/CheckoutScreen";
import ContactUsScreen from "./screens/ContactUsScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import PricingScreen from "./screens/PricingScreen";
import FaqScreen from "./screens/FaqScreen";
import NotFoundScreen from "./screens/NotFoundScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import Footer from "./components/Footer";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import ProductListScreen from "./screens/ProductListScreen";
import OrderListScreen from "./screens/OrderListScreen";

function App() {
  const [progress, setProgress] = useState(0);
  const value = useSelector((state) => state.progressBar);

  useEffect(() => {
    setProgress(value);
  }, [value]);

  return (
    <Router>
      {/* //react-top-loading-bar */}
      <LoadingBar
        color="red"
        height={4}
        progress={progress}
        onLoaderFinished={() => progress && setProgress(0)}
      />
      <Navbar />
      <Switch>
        <Route path="/" exact component={LandingScreen} />
        <Route path="/checkout/:id?" exact component={CheckoutScreen} />
        <Route path="/login" exact component={LoginScreen} />
        <Route path="/register" exact component={RegisterScreen} />
        <Route path="/contact-us" exact component={ContactUsScreen} />
        <Route path="/profile" exact component={ProfileScreen} />
        <Route path="/pricing" exact component={PricingScreen} />
        <Route path="/shipping" exact component={ShippingScreen} />
        <Route path="/payment" exact component={PaymentScreen} />
        <Route path="/place-order" exact component={PlaceOrderScreen} />
        <Route path="/order/:id" exact component={OrderScreen} />
        <Route
          path="/product-details/:id"
          exact
          component={ProductDetailsScreen}
        />
        <Route path="/faq" exact component={FaqScreen} />
        <Route path="/forgot-password" exact component={ForgotPasswordScreen} />
        <Route path="/admin/users" exact component={UserListScreen} />
        <Route path="/admin/products" exact component={ProductListScreen} />
        <Route path="/admin/orders" exact component={OrderListScreen} />
        <Route path="*" component={NotFoundScreen} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
