import Image from '@components/fragments/Image'
import Link from '@components/fragments/Link'

export default `
  ${Link}
  ${Image}
  query ACFOptionsHeader {
    acfOptionsHeader {
      header {
        alertBanner {
          active
          leftCopy
          rightCopy
        }
        navigation {
          navigationLayouts {
            ... on AcfOptionsHeader_Header_navigation_NavigationLayouts_Help {
              fieldGroupName
              copy
              headline
              link {
                ...Link
              }
              actions {
                icon {
                  ...Image
                }
                link {
                  ...Link
                }
              }
            }
            ... on AcfOptionsHeader_Header_navigation_NavigationLayouts_Brands {
              fieldGroupName
              headline
              link {
                ...Link
              }
              featuredBrands {
                ... on Brand {
                  id
                }
              }
            }
            ... on AcfOptionsHeader_Header_navigation_NavigationLayouts_Need {
              fieldGroupName
              chipLinks {
                highlighted
                link {
                  ...Link
                }
              }
              ctaLink {
                ...Link
              }
              quickLinks {
                link {
                  ...Link
                }
              }
            }
            ... on AcfOptionsHeader_Header_navigation_NavigationLayouts_Pharmacy {
              fieldGroupName
              cta {
                ...Link
              }
              listOfLinks {
                link {
                  ...Link
                }
              }
              quickLinks {
                link {
                  ...Link
                }
              }
              video {
                copy
                fieldGroupName
                headline
                link {
                  ...Link
                }
                thumbnail {
                  ...Image
                }
              }
            }
            ... on AcfOptionsHeader_Header_navigation_NavigationLayouts_Vaccines {
              fieldGroupName
              columns {
                cta {
                  ...Link
                }
                links {
                  link {
                    ...Link
                  }
                }
                title
              }
              marketingBox {
                alignment
                image {
                  ...Image
                }
                link {
                  ...Link
                }
                title
              }
              quickLinks {
                link {
                  ...Link
                }
              }
            }
            ... on AcfOptionsHeader_Header_navigation_NavigationLayouts_Cats {
              fieldGroupName
              links {
                link  {
                  ...Link
                }
              }
              marketingBox {
                title
                alignment
                fieldGroupName
                image {
                  ...Image
                }
                link {
                  ...Link
                }
              }
              quickLinks {
                link {
                  ...Link
                }
              }
            }
            ... on AcfOptionsHeader_Header_navigation_NavigationLayouts_Dogs {
              fieldGroupName
              links {
                link {
                  ...Link
                }
              }
              marketingBox {
                title
                link {
                  ...Link
                }
                alignment
                fieldGroupName
                image {
                  ...Image
                }
              }
              quickLinks {
                link {
                  ...Link
                }
              }
            }
          }
          highlight
          link {
            ...Link
          }
          title
        }
      }
    }
  }
`
