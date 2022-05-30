const CustomerFavoritesFragment = (t: string) => `
  fragment CustomerFavorites on ${t}_CustomerFavorites {
    headline
  }
`
export default CustomerFavoritesFragment
