
import { ThemeContext } from 'styled-components';
import { Link } from 'react-router-dom';
import { ImMenu } from 'react-icons/im';
import { AiOutlineClose } from 'react-icons/ai';
import { useState, useContext } from 'react';
import Switch from 'react-switch';
import { shade } from 'polished';

import { Container } from './styles';
import { Moon, Sun } from './icons';
import { SideBarData } from './sideBarData';

interface Props {
  toggleTheme(): void
}

export default function Header({ toggleTheme }: Props) {
  const { colors, name} = useContext(ThemeContext);
  const [sideBar, setSideBar] = useState(false);

  const showSideBar = () => setSideBar(!sideBar);

  return (
    <Container>
      <div className='navbar'>
        <Link to='#' className='menu-bars'>
          <ImMenu
            style={{ color: 'white', cursor: 'pointer' }}
            onClick={showSideBar}
          />
        </Link>
        <h1>Control Panel</h1>
      </div>

      <nav className={sideBar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items'>
          <li className='navbar-toggle'>
            <Link to='#' className='menu-bars'>
              <AiOutlineClose style={{ color: 'white' }} />
            </Link>
          </li>
          {SideBarData.map((data, index) => {
            return (
              <li key={index} className={data.cName}>
                <Link to={data.path}>
                  {data.icon}
                  <span>{data.title}</span>
                </Link>
              </li>
            );
          })}
          <Switch 
            onChange={toggleTheme}
            checked={name === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={30}
            handleDiameter={20}
            offColor={shade(0.15, colors.primary)}
            onColor={colors.secundary}
            checkedHandleIcon={<Moon/>}
            uncheckedHandleIcon={<Sun/>}
          />
        </ul>
      </nav>
    </Container>
  )
}