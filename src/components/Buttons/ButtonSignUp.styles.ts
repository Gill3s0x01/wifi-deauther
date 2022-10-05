import styled from 'styled-components'

export const ButtonContent = styled.button`
  width: 100%;
  padding: 0;
  height: 65px;
  border-radius: 30px;
  border: 1px solid ${(props) => props.theme.blue_100};
  color: ${(props) => props.theme.blue_100};
  background-color: transparent;
  transition-delay: 90ms;
  margin-top: 30px;

  @media (min-width: 768px) {
    margin: 30px 10px 0px 10px;
    min-width: 160px;
    height: 60px;
    font-size: 1.1rem;
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
export const TextButton = styled.text`
  font-size: 1.3rem;
  color: ${(props) => props.theme.white};
  text-decoration: none;
  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`
