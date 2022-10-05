import { NavLink } from 'react-router-dom'
import { ButtonHeader } from '../Buttons/ButtonHeader'
import {
  HeaderContainer,
  ImageLogo,
  ImageBox,
  ImageTitle,
  BoxText,
  TextHeaderA,
  TextHeader,
  DividerHeader,
  SpanText,
  SpanIcon,
  SpanBox,
} from './Header.styles'

export function Header() {
  return (
    <>
      <HeaderContainer>
        <ImageBox>
          <NavLink to="/">
            <ImageLogo
              src="./vite.svg"
              alt="Um triangulo invertido na cor roxo e azul com um raio amarelo no centro por cima dele"
            />
          </NavLink>
          <ImageTitle>Wi-Fi Deauther RR</ImageTitle>
        </ImageBox>

        <BoxText>
          <NavLink to="/sign-up">
            <TextHeaderA>Cadastre-se</TextHeaderA>
          </NavLink>
          <DividerHeader> | </DividerHeader>
          <TextHeader>
            Manual de uso
            <SpanBox>
              <SpanText>
                Baixe no botão <SpanIcon>**</SpanIcon>
              </SpanText>
            </SpanBox>
          </TextHeader>
          <ButtonHeader />
        </BoxText>
      </HeaderContainer>
    </>
  )
}
