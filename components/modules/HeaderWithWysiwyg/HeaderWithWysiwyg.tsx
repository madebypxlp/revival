import React, { FunctionComponent } from 'react'
import styles from './HeaderWithWysiwyg.module.scss'
import IHeaderWithWysiwyg from './HeaderWithWysiwyg.interface'

import parse from 'html-react-parser'
import Button from '@components/ui/Button/Button'

const HeaderWithWysiwygModule: FunctionComponent<{
  module: IHeaderWithWysiwyg
}> = ({ module }) => {
  const { subline, headline, wysiwyg, link } = module
  return (
    <div className={`${styles.root} container my-100`}>
      <div className="default-grid">
        <div className="col-span-2 md:col-span-10">
          {subline && (
            <span className="text-blue-default typo-eyebrow pb-10">
              {subline}
            </span>
          )}
          {headline && <h2 className="text-blue-default pb-50">{headline}</h2>}
          {link && (
            <Button
              className='mb-85'
              href={link.url}
              target={link.target}
              variant="small"
              color="yellow"
              type="default"
            >
              {link.title}
            </Button>
          )}
          {wysiwyg &&
            React.createElement(
              'div',
              { className: 'wysiwyg typo-large-paragraph' },
              parse(wysiwyg)
            )}
        </div>
      </div>
    </div>
  )
}

export default HeaderWithWysiwygModule
