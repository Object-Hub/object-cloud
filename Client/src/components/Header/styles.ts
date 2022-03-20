import styles from 'styled-components';

export const Container = styles.div`
  height: 45px;
  background: ${props => props.theme.colors.primary};
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;

`;