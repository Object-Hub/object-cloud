
import { useContext } from 'react';
import { Container } from './styles';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
import { Moon, Sun } from './icons';

interface Props {
  toggleTheme(): void
}

export default function Header({ toggleTheme }: Props) {
  const { colors, name} = useContext(ThemeContext);

  return (
    <Container>
      <h1>Control Panel</h1>

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
    </Container>
  )
}