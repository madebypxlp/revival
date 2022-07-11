import SpeechBubble from '@components/icons/SpeechBubble'
import NewsletterForm from '@components/ui/NewsletterForm/NewsletterForm'
import { AcfOptionsFooter } from 'framework/wordpress/interfaces/footer'
import styles from './Footer.module.scss'

const FooterNewsletter = ({ data }: { data: AcfOptionsFooter }) => {
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
        <div className="text-center md:text-left">
          <p className={`${styles.note} inline-flex items-center`}>
            <SpeechBubble className="w-12 inline-block mr-10 md:w-20" />
            {note}
          </p>
        </div>
      )}
    </>
  )
}

export default FooterNewsletter
