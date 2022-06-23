const LearningCenterFilterFragment = (t: string) => `
  fragment LearningCenterFilter_${t} on ${t}_LearningCenterFilter {
    fieldGroupName
  }
`
export default LearningCenterFilterFragment
