import styles from 'styled-components';
import { shade } from 'polished';

export default styles.div`
  .navbar-menu-button {
    text-decoration: none;
    color: ${props => props.theme.colors.text}
  }

  .navbar {
    background: ${props => props.theme.colors.primary};
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
  }

  .menu-bars {
    margin-left: 1rem;
    font-size: 1.6rem;
  }

  .menu-bars-iconClose {
    text-align: center !important;
  }

  .nav-menu {
    background: ${props => props.theme.colors.primary};
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: -100%;
    transition: left 0.55s;
    z-index: 9999;
  }

  .nav-menu.active {
    left: 0;
    transition: left 0.55s;
  }

  .nav-text {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    height: 4.5rem;
  }

  .nav-text a {
    text-decoration: none;
    color: ${props => props.theme.colors.text};
    font-size: 18px;
    width: 95%;
    height: 85%;
    display: flex;
    padding: 0 16px;
    border-radius: 15px;
    align-items: center;
    transition: background 0.30s ease;
  }

  .nav-text a:hover {
    color: #fff;
    background: ${p => p.theme.colors.tertiary}
  }

  .nav-menu-items {
    width: 100%;
  }


  .navbar-toggle {
    background: ${props => props.theme.colors.primary}
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
  }

  span {
    margin-left: 16px;
  }

  .Switch {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  .Switch-bg {
    display: flex;

    padding: 0.5rem;
    border-radius: 25rem;
    background: ${props => props.theme.colors.background};  
  }
`;  