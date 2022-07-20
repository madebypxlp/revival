import type { GetLoggedInCustomerQuery } from '../../../schema'
import type { CustomersHandlers } from '..'
import { CustomerAddress } from 'framework/custom-interfaces/customer-address'

export const getLoggedInCustomerQuery = /* GraphQL */ `
  query getLoggedInCustomer {
    customer {
      entityId
      firstName
      lastName
      email
      company
      customerGroupId
      notes
      phone
      addressCount
      attributeCount
      storeCredit {
        value
        currencyCode
      }
    }
  }
`

export type Customer = NonNullable<GetLoggedInCustomerQuery['customer']>

const getLoggedInCustomer: CustomersHandlers['getLoggedInCustomer'] = async ({
  req,
  res,
  config,
}) => {
  const token = req.cookies[config.customerCookie]

  if (token) {
    const { data } = await config.fetch<GetLoggedInCustomerQuery>(
      getLoggedInCustomerQuery,
      undefined,
      {
        headers: {
          cookie: `${config.customerCookie}=${token}`,
        },
      }
    )
    const { customer } = data
    if (!customer) {
      return res.status(400).json({
        data: null,
        errors: [{ message: 'Customer not found', code: 'not_found' }],
      })
    }

    const addresses = (await config.storeApiFetch(
      `/v3/customers/addresses?customer_id:in=${customer?.entityId}`
    )) as { data: CustomerAddress[] }

    if (addresses.data) {
      customer.addresses = addresses.data
    }

    return res.status(200).json({ data: { customer } })
  }

  res.status(200).json({ data: null })
}

export default getLoggedInCustomer
