import styles from 'styled-components';

export const FooterStyle = styles.div`
  text-align: center;
  color: ${props => props.theme.colors.text};
  width: 100%;
  position: absolute;
  bottom: 0;

  padding: 1rem;
  background: ${props => props.theme.colors.primary};
`