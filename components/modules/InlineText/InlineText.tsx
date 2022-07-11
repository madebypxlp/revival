import React, { FunctionComponent } from 'react'
import parse from 'html-react-parser'
import c from 'classnames'
import Button from '@components/ui/Button/Button'
import styles from './InlineText.module.scss'
import IInlineText from './InlineText.interface'

const InlineTextModule: FunctionComponent<{ module: IInlineText }> = ({
  module,
}) => {
  const { headlineColor } = module
  const color = headlineColor === 'blue' ? 'text-blue' : 'text-red'
  return (
    <div className={`${styles.root} container relative`}>
      <div className="default-grid">
        <div className="col-span-2 md:col-span-10 md:col-start-2">
          {module.headline && (
            <h3 className={c(styles.headline, color)}>{module.headline}</h3>
          )}
          {module.text &&
            React.createElement(
              'div',
              { className: styles.text },
              parse(module.text)
            )}
          {module.link && (
            <Button
              href={module.link.url}
              type="default"
              variant="large"
              color="yellow"
              target={module.link.target}
              className={styles.link}
            >
              {module.link.title}
            </Button>
          )}
        </div>
      </div>
      {module.backgroundPawImage && (
        <div className={styles.paw}>
          <svg
            fill="none"
            height="779"
            viewBox="0 0 737 779"
            width="737"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="#f3f1e8">
              <path d="m278.392 351.67c-31.617 123.029-72.729 136.11-26.892 196.798 45.838 60.689 36.833 50.873 152.704-30.299 115.872-81.171 149.14 22.186 184.175-41.777 35.035-63.964-89.254-143.57-113.208-149.817-127.162-33.165-165.162-97.935-196.779 25.095z" />
              <path d="m263.421 295.416c27.43-20.24 26.503-68.041-2.07-106.766-28.574-38.725-73.974-53.711-101.405-33.471-27.43 20.24-26.503 68.04 2.07 106.765 28.574 38.726 73.974 53.711 101.405 33.472z" />
              <path d="m416.457 159.78c-6.133-47.733-38.515-82.9068-72.326-78.5623-33.811 4.3444-56.249 46.5623-50.115 94.2953 6.133 47.734 38.514 82.907 72.326 78.563 33.811-4.345 56.248-46.562 50.115-94.296z" />
              <path d="m554.921 233.987c9.202-37.385-4.805-72.975-31.286-79.494-26.481-6.518-55.408 18.505-64.61 55.89s4.805 72.975 31.286 79.493 55.408-18.504 64.61-55.889z" />
              <path d="m210.81 401.767c14.624-23.019.135-58.416-32.362-79.062-32.497-20.645-70.696-18.722-85.3205 4.297-14.624 23.019-.1349 58.416 32.3625 79.062 32.497 20.645 70.696 18.722 85.32-4.297z" />
            </g>
          </svg>
        </div>
      )}
    </div>
  )
}

export default InlineTextModule
