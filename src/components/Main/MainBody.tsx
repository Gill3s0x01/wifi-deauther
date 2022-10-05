import { ButtonDownload } from '../Buttons/ButtonDownload'
import { ButtonSignUp } from '../Buttons/ButtonSignUp'
import {
  MainWrapper,
  WrapperText,
  TextSpan,
  TitleText,
  DescriptionText,
  WrapperImg,
  ImgMain,
  WrapperButton,
} from './MainBody.style'

export function MainBody() {
  return (
    <>
      <MainWrapper>
        <WrapperText>
          <TextSpan>Bem vindo</TextSpan>
          <TitleText>
            H4CK3RS, COMUNIDADE FEITA PRA VOCÊ HACKER ÉTICO !!!
          </TitleText>
          <DescriptionText>
            Baixe o manual do wi-fi deauther e inscreva-se em nossa comunidade,
            juntos vamos construir um planeta mais seguro.
          </DescriptionText>
          <WrapperButton>
            <ButtonDownload />
            <ButtonSignUp />
          </WrapperButton>
        </WrapperText>
        <WrapperImg>
          <ImgMain
            src="./banner.png"
            alt="uma mulher cyborg com mascara de ar oculos e duas marretas nas costas, toda imagem com cor azul, roxo e rosa"
          />
        </WrapperImg>
      </MainWrapper>
    </>
  )
}
