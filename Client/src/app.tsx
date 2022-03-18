import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { NotFound } from "./pages/NotFound";
import { DashBoard } from "./pages/private/dashboard";

import { Home } from "./pages/public/Home";
import { Login } from "./pages/public/Login";
import { Register } from "./pages/public/Register";
import { ForgotPassword } from "./pages/public/ForgotPassword";

export function App() {
  return (
      <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/dashboard" element={<DashBoard />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
  );
}