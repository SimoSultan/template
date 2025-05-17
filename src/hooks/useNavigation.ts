import { createSharedComposable } from '@vueuse/core'
import { shallowRef } from 'vue'

const _useNavigation = () => {
  const isSideMenuOpen = shallowRef(false)
  const toggleSideMenu = () => (isSideMenuOpen.value = !isSideMenuOpen.value)

  return {
    isSideMenuOpen,
    toggleSideMenu,
  }
}

export const useNavigation = createSharedComposable(_useNavigation)
