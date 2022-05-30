const CustomerFavorites = () => {
  return <div>CustomerFavorites</div>
}

export default CustomerFavorites

export const CustomerFavoritesFragment = (t: string) => `
  fragment CustomerFavorites on ${t}_CustomerFavorites {
    headline
  }
`
