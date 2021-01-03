import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Checkout from "./pages/Checkout";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Pricing from "./pages/Pricing";
import Help from "./pages/Help";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";
import ForgotPassword from "./pages/ForgotPassword";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";

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
        <Route path="/" exact component={Landing} />
        <Route path="/checkout/:id?" exact component={Checkout} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/contact-us" exact component={ContactUs} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/pricing" exact component={Pricing} />
        <Route path="/product-details/:id" exact component={ProductDetails} />
        <Route path="/help" exact component={Help} />
        <Route path="/forgot-password" exact component={ForgotPassword} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
