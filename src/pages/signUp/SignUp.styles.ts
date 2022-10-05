import styled from 'styled-components'

export const ContainerSignUp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 30px;
  padding-left: 10px;
`
export const ButtonWrapperIcon = styled.button`
  width: 40px;
  height: 40px;
  color: ${(props) => props.theme.white};
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.blue_100};
  background-color: transparent;
  margin-left: 20px;
  margin-top: 30px;
  cursor: pointer;
  &:hover {
    scale: 1.2;
  }
`
export const WrapperForm = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10%;
`

export const TitleSignUp = styled.text`
  text-align: center;
  font-family: 'Roboto', monospace, sans-serif;
  font-size: 2.2rem;
  font-weight: 900;
  @media (min-width: 769px) {
    font-size: 3.4rem;
  }
`

export const DescriptionSignUp = styled.text`
  display: flex;
  align-items: center;
  font-family: 'Roboto Mono', monospace, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  width: 100%;
  padding-top: 30px;
  @media (min-width: 769px) {
    font-size: 1.2rem;
    padding-top: 50px;
    width: 60%;
    margin-bottom: -50px;
  }
`

export const InputForm = styled.input`
  font-family: 'Roboto Mono', monospace, sans-serif;
  font-weight: 400;
  font-size: 1rem;
  width: 100%;
  margin-bottom: 14px;
  height: 40px;
  border-radius: 8px;
  border: 0;
  padding: 0 8px;
`
export const TextAreaInput = styled.textarea`
  margin-bottom: 14px;
  border-radius: 4px;
  border: 0;
  padding: 8px;
  height: 94px;
  resize: none;
  width: 100%;
  font-family: 'Roboto Mono', monospace, sans-serif;
`
export const ButtonSend = styled.input`
  width: 100%;
  height: 65px;
  color: ${(props) => props.theme.blue_100};
  border-radius: 30px;
  border: 1px solid ${(props) => props.theme.blue_100};
  background-color: ${(props) => props.theme.blue_100};
  transition-delay: 90ms;
  margin-top: 30px;
  font-size: 1.3rem;
  color: ${(props) => props.theme.white};
  text-decoration: none;
  @media (min-width: 769px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    font-size: 1.6rem;
    margin: 30px 10px 0px 10px;
    min-width: 160px;
    height: 60px;
  }
  @media (min-width: 1275px) {
    margin: 5px 10px 0px 10px;
    padding: 0 5px;
    min-width: 160px;
    height: 60px;
  }
  &:hover {
    cursor: pointer;
    scale: 1.05;
  }
`
