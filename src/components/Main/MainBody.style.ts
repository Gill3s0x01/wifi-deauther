import styled from 'styled-components'

export const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0px;
  padding-left: 10%;
  flex-direction: column-reverse;
  overflow-x: hidden;

  @media (min-width: 768px) {
    margin: 60px;
    flex-direction: row;
  }
`

export const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding-left: 10px;
  margin: 0px 10px 20px 10px;
  @media (min-width: 768px) {
    width: 50%;
    padding: 30px;
    margin: 5%;
  }
`

export const TextSpan = styled.span`
  font-family: 'Roboto', sans-serif;
  color: ${(props) => props.theme['gray-100']};
  font-size: 1.4rem;
  letter-spacing: 0.02em;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`

export const TitleText = styled.text`
  font-family: 'Roboto Mono', monospace;
  color: ${(props) => props.theme.white};
  letter-spacing: 0.02em;
  font-size: 2.5rem;
  text-transform: uppercase;
  @media (min-width: 768px) {
    font-size: 2.4rem;
  }
`

export const DescriptionText = styled.text`
  font-family: 'Roboto', monospace;
  color: ${(props) => props.theme['gray-300']};
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: 0.02em;
  width: 100%;
  margin-top: 35px;
  @media (min-width: 768px) {
    color: ${(props) => props.theme['gray-100']};
    font-size: 1.4rem;
    letter-spacing: 0.08em;
    line-height: 2.2rem;
    font-weight: 400;
  }
`

export const WrapperImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 50px;
  @media (min-width: 768px) {
    margin: 50px;
    width: 50%;
  }
`
export const ImgMain = styled.img`
  border-radius: 30px;
  width: 80%;
  height: auto;
  @media (min-width: 768px) {
    width: 60%;
  }
`
export const WrapperButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  margin: 0px 0px 0px -10px;
  padding: 0;
  flex-direction: column;
  @media (min-width: 768px) {
    justify-content: space-around;
    margin: 50px 0 30px 0;
    width: 60%;

    flex-direction: column;
  }
  @media (min-width: 1275px) {
    width: 60%;
    flex-direction: row;
  }
`
