import styled from 'styled-components'

export const ButtonContainerDown = styled.button`
  width: 100%;
  height: 65px;
  border-radius: 30px;
  border: 1px solid ${(props) => props.theme['green-300']};
  background-color: ${(props) => props.theme.blue_100};
  transition-delay: 90ms;
  margin-top: 30px;
  @media (min-width: 768px) {
    margin: 20px 10px 0px 10px;
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

export const TextButton = styled.a`
  font-size: 1.3rem;
  color: ${(props) => props.theme.white};
  text-decoration: none;
`
