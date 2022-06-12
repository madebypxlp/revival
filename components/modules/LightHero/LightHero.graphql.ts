const LightHeroFragment = (t: string) => `
  fragment LightHero_${t} on ${t}_LightHero {
    fieldGroupName
    headline
    subline
  }
`
export default LightHeroFragment
