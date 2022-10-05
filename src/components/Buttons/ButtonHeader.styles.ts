import styled from 'styled-components'

export const ButtonWrapper = styled.button`
  width: 40px;
  height: 40px;
  color: ${(props) => props.theme.white};
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.blue_100};
  background-color: ${(props) => props.theme['green-300']};
  margin-right: 30px;
  &:hover {
    scale: 1.2;
  }
`
