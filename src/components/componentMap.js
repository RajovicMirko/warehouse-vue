// LAYOUT
import DrawerLink from './layout/DrawerLink'
// GLOBAL
import languageSelect from './global/language-select'
import formCustom from './global/form'
import formTitle from './global/form/form-title'
import errorMessage from './global/form/error-message'
import inputOutline from './global/input-outline'

const componentsMap = {
  // LAYOUT
  'drawer-link': DrawerLink,
  // GLOBAL
  'language-select': languageSelect,
  'form-custom': formCustom,
  'form-title': formTitle,
  'error-message': errorMessage,
  'input-outline': inputOutline
}

export const getComponent = (componentName) => {
  return componentsMap[componentName]
}
