const TextImageHeroFragment = (t: string) => `
  fragment TextImageHero_${t} on ${t}_TextImageHero {
    fieldGroupName
  }
`
export default TextImageHeroFragment
