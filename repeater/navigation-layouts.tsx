import NavigationLayoutsBrands from '@components/common/Navbar/layouts/NavigationLayoutsBrands'
import NavigationLayoutsCats from '@components/common/Navbar/layouts/NavigationLayoutsCats'
import NavigationLayoutsDogs from '@components/common/Navbar/layouts/NavigationLayoutsDogs'
import NavigationLayoutsHelp from '@components/common/Navbar/layouts/NavigationLayoutsHelp'
import NavigationLayoutsNeed from '@components/common/Navbar/layouts/NavigationLayoutsNeed'
import NavigationLayoutsPharmacy from '@components/common/Navbar/layouts/NavigationLayoutsPharmacy'
import NavigationLayoutsVaccines from '@components/common/Navbar/layouts/NavigationLayoutsVaccines'

import { NavigationLayouts } from 'framework/wordpress/interfaces/header'

const renderNavigationLayouts = (layout: NavigationLayouts) => {
  switch (layout.fieldGroupName) {
    case 'AcfOptionsHeader_Header_NavigationLayouts_Dogs':
    case 'AcfOptionsHeader_Header_navigation_NavigationLayouts_Dogs':
      return <NavigationLayoutsDogs module={layout} />
    case 'AcfOptionsHeader_Header_NavigationLayouts_Cats':
    case 'AcfOptionsHeader_Header_navigation_NavigationLayouts_Cats':
      return <NavigationLayoutsCats module={layout} />
    case 'AcfOptionsHeader_Header_NavigationLayouts_Vaccines':
    case 'AcfOptionsHeader_Header_navigation_NavigationLayouts_Vaccines':
      return <NavigationLayoutsVaccines module={layout} />
    case 'AcfOptionsHeader_Header_NavigationLayouts_Pharmacy':
    case 'AcfOptionsHeader_Header_navigation_NavigationLayouts_Pharmacy':
      return <NavigationLayoutsPharmacy module={layout} />
    case 'AcfOptionsHeader_Header_NavigationLayouts_Need':
    case 'AcfOptionsHeader_Header_navigation_NavigationLayouts_Need':
      return <NavigationLayoutsNeed module={layout} />
    case 'AcfOptionsHeader_Header_NavigationLayouts_Brands':
    case 'AcfOptionsHeader_Header_navigation_NavigationLayouts_Brands':
      return <NavigationLayoutsBrands module={layout} />
    case 'AcfOptionsHeader_Header_NavigationLayouts_Help':
    case 'AcfOptionsHeader_Header_navigation_NavigationLayouts_Help':
      return <NavigationLayoutsHelp module={layout} />
    default:
      // @ts-ignore
      return `${layout.fieldGroupName} not found`
  }
}

export default renderNavigationLayouts
