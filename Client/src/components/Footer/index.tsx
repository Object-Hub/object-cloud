import { FooterStyle } from "./styles"

export function Footer() {
  return (
    <FooterStyle>
      <p>Control Panel&reg; &copy; 2022 - {new Date().getUTCFullYear()}</p>
    </FooterStyle>
  )
}