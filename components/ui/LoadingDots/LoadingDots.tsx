import classNames from 'classnames'
import styles from './LoadingDots.module.scss'

const LoadingDots = ({ portal = false }: { portal?: boolean }) => (
  <span className={classNames(styles.root, { [styles.portal]: portal })}>
    <div className={styles.inner}>
      <span />
      <span />
      <span />
    </div>
  </span>
)

export default LoadingDots
