import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DashBoard } from '../pages/private/dashboard';

import { Home } from '../pages/public/Home';
import { Login } from '../pages/public/Login';
import { Register } from '../pages/public/Register';

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<DashBoard />} />
            </Routes>
        </Router>
    )
}