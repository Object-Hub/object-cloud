import styles from 'styled-components';

export const Container = styles.div`
  .navbar {
    background: ${props => props.theme.colors.primary};
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    color: #fff;
  }

  .menu-bars {
    margin-left: 2rem;
    font-size: 2rem;
    background: none;
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
    transition: 850ms;
  }

  .nav-menu.active {
    left: 0;
    transition: 350ms;
  }

  .nav-text {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 8px 0px 8px 16px;
    list-style: none;
    height: 60px;
  }

  .nav-text a {
    text-decoration: none;
    color: ${props => props.theme.colors.text};
    font-size: 18px;
    width: 95%;
    height: 100%;
    display: flex;
    padding: 0 16px;
    border-radius: 4px;
  }

  .nav-text a:hover {
    background: ${props => props.theme.colors.secundary}
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
`;