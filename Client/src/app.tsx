import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, DefaultTheme } from 'styled-components'

import { NotFound } from "./pages/NotFound";
import { DashBoard } from "./pages/private/dashboard";

import { Home } from "./pages/public/Home";
import { Login } from "./pages/public/Login";
import { Register } from "./pages/public/Register";
import { ForgotPassword } from "./pages/public/ForgotPassword";

import dark from './styles/themes/dark';
import light from './styles/themes/light';

import GlobalStyle from './styles/global';
import Header from './components/Global/Header';
import usePersistedState from "./utils/usePersistedState";
import { Footer } from "./components/Global/Footer";

export function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('@theme', light);

  const toggleTheme = () => {
    setTheme(theme.name === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Router>
        <Header toggleTheme={toggleTheme}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </ThemeProvider>
  );
}