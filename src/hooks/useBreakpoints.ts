import {
  breakpointsTailwind,
  createSharedComposable,
  useBreakpoints as useVueUseBreakpoints,
} from '@vueuse/core'

/**
 * Returns reactive refs and getters for our Tailwind-defined viewport
 * breakpoints.
 * @see https://vueuse.org/core/useBreakpoints/
 */
export const useBreakpoints = createSharedComposable(() => {
  return useVueUseBreakpoints(breakpointsTailwind)
})
