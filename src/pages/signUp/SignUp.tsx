import { Header } from '../../components/header/Header'
import emailjs from '@emailjs/browser'
import {
  ContainerSignUp,
  InputForm,
  TextAreaInput,
  WrapperForm,
  TitleSignUp,
  DescriptionSignUp,
  ButtonSend,
  ButtonWrapperIcon,
} from './SignUp.styles'
import { FormEvent, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const sendEmail = (e: FormEvent) => {
    e.preventDefault()

    if (name === '' || email === '' || message === '') {
      alert('Por favor, preencha todos os campos')
      return
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    }

    emailjs
      .send(
        'service_d789dj0e',
        'template_dhohd99',
        templateParams,
        'DhnkIl97Kui0d'
      )
      .then(
        (resp) => {
          console.log('email enviado', resp.status, resp.text)
          setName('')
          setEmail('')
          setMessage('')
        },
        (err) => {
          console.log('FAILED: ', err)
        }
      )
  }
  return (
    <>
      <Header />
      <NavLink to="/">
        <ButtonWrapperIcon>
          <BiArrowBack size={'25px'} color={'white'} />
        </ButtonWrapperIcon>
      </NavLink>
      <ContainerSignUp>
        <TitleSignUp>Cadastre-se Aqui</TitleSignUp>
        <DescriptionSignUp>
          Seja um hacker etico em nossa comunidade, e faça parte da evolução da
          tecnologia e segurança.
        </DescriptionSignUp>
        <WrapperForm>
          <form
            onSubmit={(e) => {
              sendEmail(e)
            }}
          >
            <InputForm
              type="text"
              placeholder="Digite seu nome"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <InputForm
              type="text"
              placeholder="Digite seu email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <TextAreaInput
              placeholder="Digite sua mensagem..."
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <ButtonSend type="submit" value="Enviar" />
          </form>
        </WrapperForm>
      </ContainerSignUp>
    </>
  )
}
