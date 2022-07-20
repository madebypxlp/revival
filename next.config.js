const commerce = require('./commerce.config.json')
const withCommerceConfig = require('./framework/commerce/with-config')

const isBC = commerce.provider === 'bigcommerce'
const isShopify = commerce.provider === 'shopify'

module.exports = withCommerceConfig({
  commerce,
  images: {
    domains: ['revival-wp.weareenvoy.net'],
  },
  rewrites() {
    return []
  },
})
