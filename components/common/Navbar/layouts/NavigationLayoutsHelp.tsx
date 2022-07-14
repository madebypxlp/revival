import { FunctionComponent } from 'react'
import Image from 'next/image'
import cn from 'classnames'
import { NavigationLayoutsHelp } from 'framework/wordpress/interfaces/header'
import Button from '@components/ui/Button/Button'
import parse from 'html-react-parser'
import { useIsMobile } from '@commerce/utils/hooks'
import styles from '../Navbar.module.scss'

const Navbar: FunctionComponent<{ module: NavigationLayoutsHelp }> = ({
  module,
}) => {
  const { copy, headline, link, actions } = module
  const isMobile = useIsMobile()

  return (
    <div className={cn(styles.NavigationLayoutsHelp, 'container ')}>
      <div className="default-grid relative z-10 bg-white">
        <div className="md:border-none border-t-[0.5px] border-greyscale-4 absolute top-60 w-full " />
        <div className="md:col-start-2 md:col-span-4 col-span-full pt-75 ">
          <div className={cn(styles.helpHeadline, 'md:mb-20 mb-10 w-300 ')}>
            {headline}
          </div>
          <div className={cn(styles.helpCopy, 'md:mb-55 mb-20 w-full')}>
            {parse(copy)}
          </div>
          <Button
            className="md:mb-75 mb-40"
            color="yellow"
            variant="large"
            type="default"
            link={link}
          />
        </div>
        <div className="md:col-start-7 md:col-span-6 col-span-full col-start-1 flex flex-col md:pl-160 md:pt-120 md:pb-0 pt-40 pb-50 pl-10 relative right-0 left-0">
          <div
            className={cn(
              styles.blueBackground,
              'absolute top-0 bottom-0 left-0 -right-85'
            )}
          />
          <div className="absolute top-0 bottom-0 md:left-0 md:-right-85 -left-20 -right-20 bg-blue" />
          {actions.map((action, index) => (
            <div
              key={action.link.title}
              className="flex items-center text-white md:mb-60 mb-10 z-10"
            >
              <div className="flex justify-center md:items-center md:mr-50 mr-16">
                <Image
                  className="max-h-50"
                  alt={action.icon.altText}
                  src={action.icon.sourceUrl}
                  width={
                    action.icon.mediaDetails.width / (isMobile ? 6.97 : 2.788)
                  }
                  height={
                    action.icon.mediaDetails.height / (isMobile ? 6.6 : 2.64)
                  }
                />
              </div>
              <h5
                className={cn(
                  styles.helpInfoText,
                  index >= 1 ? styles.helpInfoUnderlined : ''
                )}
              >
                {action.link.title}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar
