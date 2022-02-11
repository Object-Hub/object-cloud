import react from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../components/home/home';
import { LoginForm } from '../components/LoginForm/LoginForm';

export default function Routes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginForm />} />
            </Routes>
        </Router>
    )
}