import { NavLink } from 'react-router-dom'
import { ButtonContent, TextButton } from './ButtonSignUp.styles'

export function ButtonSignUp() {
  return (
    <>
      <ButtonContent>
        <NavLink to="/sign-up">
          <TextButton>Inscreva-se</TextButton>
        </NavLink>
      </ButtonContent>
    </>
  )
}
