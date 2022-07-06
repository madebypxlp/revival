import { FunctionComponent } from 'react'
import Image from 'next/image'
import styles from '../Navbar.module.scss'
import cn from 'classnames'
import { NavigationLayoutsHelp } from 'framework/wordpress/interfaces/header'
import Button from '@components/ui/Button/Button'
import parse from 'html-react-parser'

const Navbar: FunctionComponent<{ module: NavigationLayoutsHelp }> = ({
  module,
}) => {
  const { copy, headline, link, actions } = module

  return (
    <div className={cn(styles.NavigationLayoutsHelp, 'container')}>
      <div className="default-grid relative z-10 bg-white">
        <div className="col-start-2 col-span-4 pt-75">
          <div className={cn(styles.helpHeadline, 'mb-20 w-300')}>
            {headline}
          </div>
          <div className={cn(styles.helpCopy, 'mb-55')}>{parse(copy)}</div>
          <Button
            className="mb-75"
            color="yellow"
            variant="large"
            type="default"
            link={link}
          />
        </div>
        <div className="col-start-7 col-span-6 flex flex-col pl-160 pt-120 relative">
          <div
            className={cn(
              styles.blueBackground,
              'absolute top-0 bottom-0 left-0 -right-85'
            )}
          />
          <div className="absolute top-0 bottom-0 left-0 -right-85 bg-blue" />
          {actions.map((action, index) => {
            return (
              <div className="flex items-center text-white mb-60 z-10">
                <div className="flex justify-center items-center mr-50">
                  <Image
                    className="max-h-50"
                    src={action.icon.sourceUrl}
                    width={action.icon.mediaDetails.width / 2.788}
                    height={action.icon.mediaDetails.height / 2.64}
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
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Navbar
