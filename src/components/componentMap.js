// LAYOUT
import DrawerLink from './layout/DrawerLink'
// GLOBAL
import languageSelect from './global/language-select'
import formCustom from './global/form'
import formTitle from './global/form/form-title'
import errorMessage from './global/form/error-message'
import inputOutline from './global/input-outline'
// WAREHOUSES
import warehouseCard from './warehouses/warehouse-card'

const componentsMap = {
  // LAYOUT
  'drawer-link': DrawerLink,
  // GLOBAL
  'language-select': languageSelect,
  'form-custom': formCustom,
  'form-title': formTitle,
  'error-message': errorMessage,
  'input-outline': inputOutline,
  // WAREHOUSES
  'warehouse-card': warehouseCard
}

export const getComponent = (componentName) => {
  return componentsMap[componentName]
}
