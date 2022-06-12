const TeamGridFragment = (t: string) => `
  fragment TeamGrid_${t} on ${t}_TeamGrid {
    fieldGroupName
    headline
    team {
      member {
        ... on Team {
          id
          postTypeTeam {
            copy
            name
            title
            profileImage {
              ...Image
            }
            links {
              link {
                ...Link
              }
            }
          }
        }
      }
    }
  }
`
export default TeamGridFragment
