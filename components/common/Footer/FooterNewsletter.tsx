import Footer from './Footer.interface'
import styles from './Footer.module.scss'
import { FormEvent, useState } from 'react'
import SpeechBubble from '@components/icons/SpeechBubble'
import Input from '@components/ui/Input/Input'
import NewsletterForm from '@components/ui/NewsletterForm/NewsletterForm'

const FooterNewsletter = ({ data }: { data: Footer }) => {
  const { headline, copy, note } = data.newsletter

  return (
    <>
      {headline && (
        <h4 className="typo-h4 mb-12 text-center md:text-left">{headline}</h4>
      )}
      {copy && (
        <p className="typo-small-paragraph mb-16 text-center md:text-left md:mb-30 md:max-w-[19em]">
          {copy}
        </p>
      )}
      <NewsletterForm inputClassName="w-340" />
      {note && (
        <p className={styles.note}>
          <SpeechBubble className="w-12 h-auto inline-block align-middle mr-10 md:w-24" />
          {note}
        </p>
      )}
    </>
  )
}

export default FooterNewsletter
