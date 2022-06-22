import React, { FunctionComponent } from 'react'
import styles from './AccountHero.module.scss'
import IAccountHero from './AccountHero.interface'

const AccountHeroModule: FunctionComponent<{ module: IAccountHero }> = ({
  module,
}) => {
  console.log(module)
  return <div className={`${styles.root} container`}>Accounthero Module</div>
}

export default AccountHeroModule
