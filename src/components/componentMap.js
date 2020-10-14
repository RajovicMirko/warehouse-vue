import inputOutline from './global/input-outline'

const componentsMap = {
  // GLOBAL
  'input-outline': inputOutline
  // LAYOUT
}

export const getComponent = (componentName) => {
  return componentsMap[componentName]
}
