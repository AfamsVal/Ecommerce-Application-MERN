import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import CheckoutPage from "./pages/CheckoutPage";
import ContactUsPage from "./pages/ContactUsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PricingPage from "./pages/PricingPage";
import FaqPage from "./pages/FaqPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import Footer from "./components/Footer";
import ProfilePage from "./pages/ProfilePage";
import ShippingPage from "./pages/ShippingPage";
import PaymentPage from "./pages/PaymentPage";
import PlaceOrderPage from "./pages/PlaceOrderPage";
import OrderPage from "./pages/OrderPage";
import UserListPage from "./pages/UserListPage";
import ProductListPage from "./pages/ProductListPage";
import OrderListPage from "./pages/OrderListPage";

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
        <Route path="/" exact component={LandingPage} />
        <Route path="/checkout/:id?" exact component={CheckoutPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/register" exact component={RegisterPage} />
        <Route path="/contact-us" exact component={ContactUsPage} />
        <Route path="/profile" exact component={ProfilePage} />
        <Route path="/pricing" exact component={PricingPage} />
        <Route path="/shipping" exact component={ShippingPage} />
        <Route path="/payment" exact component={PaymentPage} />
        <Route path="/place-order" exact component={PlaceOrderPage} />
        <Route path="/order/:id" exact component={OrderPage} />
        <Route
          path="/product-details/:id"
          exact
          component={ProductDetailsPage}
        />
        <Route path="/faq" exact component={FaqPage} />
        <Route path="/forgot-password" exact component={ForgotPasswordPage} />
        <Route path="/admin/users" exact component={UserListPage} />
        <Route path="/admin/products" exact component={ProductListPage} />
        <Route path="/admin/orders" exact component={OrderListPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
