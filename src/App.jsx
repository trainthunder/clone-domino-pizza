import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import LandingPage from "./pages/landing-page";
import LoginPage from "./pages/login-page";
import RegisterPage from "./pages/register-page";
import OrderTrackingPage from "./pages/order-tracking-page";
import SearchBranchPage from "./pages/search-branch-page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<LandingPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/tracking" element={<OrderTrackingPage />} />
          <Route path="/search-store" element={<SearchBranchPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
