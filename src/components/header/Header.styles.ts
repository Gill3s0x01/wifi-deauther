import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 106%;
  height: 80px;
  background: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.white};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${(props) => props.theme.blue_100};
  box-shadow: 0px 10px 13px -7px #000000, 0px 5px 12px 2px rgba(0, 0, 0, 0);
  @media (min-width: 769px) {
    margin-left: 0.3%;
    width: 106%;
  }
`

export const ImageLogo = styled.img`
  margin-right: 20px;
  @media (min-width: 769px) {
    margin-right: 30px;
  }
`

export const ImageBox = styled.div`
  align-items: center;
  justify-content: space-between;
  display: flex;
  margin: 0 15px;
  @media (min-width: 769px) {
    margin: 0 40px;
  }
`

export const ImageTitle = styled.h2`
  font-size: 1.2rem;
  font-family: 'Roboto Mono', monospace;
  font-weight: bold;
  color: ${(props) => props.theme.white};
  @media (min-width: 769px) {
    font-size: 1.5rem;
  }
`
export const BoxText = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
`

export const TextHeaderA = styled.text`
  display: none;
  @media (min-width: 769px) {
    display: flex;
    color: ${(props) => props.theme['gray-100']};
    font-family: 'Roboto Mono', monospace;
    font-size: 1rem;
    font-weight: 400;
    text-decoration: none;
    margin: 0 20px;
  }
`

export const TextHeader = styled.text`
  display: none;
  @media (min-width: 769px) {
    display: flex;
    color: ${(props) => props.theme['gray-100']};
    font-family: 'Roboto Mono', monospace;
    font-size: 1rem;
    font-weight: 400;
    margin: 0 20px;
  }
`

export const DividerHeader = styled.text`
  display: none;
  @media (min-width: 769px) {
    display: flex;
    color: ${(props) => props.theme.blue_100};
    font-family: 'Roboto Mono', monospace;
    font-size: 1.8rem;
    font-weight: 400;
    margin: 0 5px;
  }
`
export const SpanBox = styled.div`
  display: none;
  @media (min-width: 769px) {
    display: flex;
    flex-direction: row;
    margin-top: -15px;
    margin-left: -100px;
  }
`
export const SpanText = styled.span`
  @media (min-width: 769px) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    color: ${(props) => props.theme.white};
    font-family: 'Roboto Mono', monospace;
    font-size: 0.7rem;
    font-weight: 400;
  }
`

export const SpanIcon = styled.span`
  @media (min-width: 769px) {
    margin-left: 5px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    color: ${(props) => props.theme['red-500']};
    font-family: 'Roboto Mono', monospace;
    font-size: 0.8rem;
    font-weight: 400;
  }
`
