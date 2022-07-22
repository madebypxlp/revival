import classNames from 'classnames'
import Portal from '@reach/portal'
import styles from './LoadingDots.module.scss'

const LoadingDots = ({ portal = false }: { portal?: boolean }) => {
  const body = (
    <span className={classNames(styles.root, { [styles.portal]: portal })}>
      <div className={styles.inner}>
        <span />
        <span />
        <span />
      </div>
    </span>
  )
  return portal ? <Portal>{body}</Portal> : body
}

export default LoadingDots
