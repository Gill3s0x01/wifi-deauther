import { ButtonWrapper } from './ButtonHeader.styles'
import { BiCloudDownload } from 'react-icons/bi'

// interface ButtonDownloadProps {
//   variant?: ButtonVartiant
// }

// export function ButtonDownload({ variant = 'primary' }: ButtonDownloadProps) {
export function ButtonHeader() {
  return (
    <>
      <ButtonWrapper>
        <a
          href='href="../../../doc/Wi-Fi-Deauther.pdf'
          target="_blank"
          download
        >
          {<BiCloudDownload size={'25px'} color={'white'} />}
        </a>
      </ButtonWrapper>
    </>
  )
}
