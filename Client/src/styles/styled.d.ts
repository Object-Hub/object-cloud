import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;

    colors: {
      primary: string;
      secundary: string;
      tertiary: string;
      background: string;
      text: string;
    }
  }
}