const AccountHeroFragment = (t: string) => `
  fragment AccountHero_${t} on ${t}_AccountHero {
    fieldGroupName
  }
`
export default AccountHeroFragment
