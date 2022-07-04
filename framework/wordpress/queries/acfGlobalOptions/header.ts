import Image from '@components/fragments/Image'
import Link from '@components/fragments/Link'

export const navigationLayouts = (t: string) => `
fragment NavigationLayouts_${t} on ${t}_NavigationLayouts {
  ... on ${t}_NavigationLayouts_Help {
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
  ... on ${t}_NavigationLayouts_Brands {
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
  ... on ${t}_NavigationLayouts_Need {
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
  ... on ${t}_NavigationLayouts_Pharmacy {
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
  ... on ${t}_NavigationLayouts_Vaccines {
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
  ... on ${t}_NavigationLayouts_Cats {
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
  ... on ${t}_NavigationLayouts_Dogs {
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
`

export default `
  ${Link}
  ${Image}
  ${navigationLayouts('AcfOptionsHeader_Header')}
  ${navigationLayouts('AcfOptionsHeader_Header_navigation')}
  query ACFOptionsHeader {
    acfOptionsHeader {
      header {
        alertBanner {
          active
          leftCopy
          rightCopy
        }
        navigationLayouts {
          ...NavigationLayouts_AcfOptionsHeader_Header
        }
        navigation {
          navigationLayouts {
            ...NavigationLayouts_AcfOptionsHeader_Header_navigation
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
