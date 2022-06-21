import Footer from './Footer.interface'
import styles from './Footer.module.scss'
import { FormEvent, useState } from 'react'
import SpeechBubble from '@components/icons/SpeechBubble'
import Input from '@components/ui/Input/Input'

const FooterNewsletter = ({ data }: { data: Footer }) => {
  const { headline, copy, note } = data.newsletter
  const [email, setEmail] = useState<string>('')
  const [success, setSuccess] = useState<boolean>(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const target = e.target as HTMLFormElement
    // send email somewhere
    console.log('Newsletter submit:', email, e)
    target.reset()
    setSuccess(true)
  }

  return (
    <>
      {headline && <h4 className="typo-h4 mb-12">{headline}</h4>}
      {copy && (
        <p className="typo-small-paragraph mb-16 md:mb-30 md:max-w-[19em]">
          {copy}
        </p>
      )}
      <form onSubmit={onSubmit}>
        <Input
          type="email"
          placeholder="Email address"
          className="inline-block mb-2 md:mb-20 w-340 max-w-full"
          variant="blue-outline"
          onChange={(v) => {
            setEmail(v)
            setSuccess(false)
          }}
        />
        {success && (
          <p className="typo-small-parapgraph text-green">Success!</p>
        )}
        <input type="submit" hidden />
      </form>
      {note && (
        <p className={styles.note}>
          <SpeechBubble className="w-10 h-auto inline-block align-middle mr-10 md:w-20" />
          {note}
        </p>
      )}
    </>
  )
}

export default FooterNewsletter
