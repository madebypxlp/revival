export default `
  query Brands {
    brands(last: 1000) {
      nodes {
        title
      }
    }
  }
`

export interface Brand {
  title: string
}
