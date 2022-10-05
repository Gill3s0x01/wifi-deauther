import { ButtonContainerDown, TextButton } from './ButtonDownload.styles'

export function ButtonDownload() {
  return (
    <>
      <ButtonContainerDown>
        <TextButton href="./doc/Wi-Fi-Deauther.pdf" target="_blank" download>
          Baixar
        </TextButton>
      </ButtonContainerDown>
    </>
  )
}
