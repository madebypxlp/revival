import { FunctionComponent } from 'react'
import ICustomerFavorites from './customerFavorites.interface'

const CustomerFavorites: FunctionComponent<ICustomerFavorites> = (props) => {
  return <div>Headline: {props.headline}</div>
}

export default CustomerFavorites
