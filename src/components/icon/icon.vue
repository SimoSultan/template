<template>
  <i class="initial:size-8" :class="classes" :style="styles" :data-testid="`material-icon-${name}`"
    >{{ name }}
  </i>
</template>

<script setup lang="ts">
import { DEFAULT_ICON } from './constants'
import type { MaterialSymbols } from './types'
import { computed, shallowRef } from 'vue'

type IconProps = {
  name: MaterialSymbols
}

const props = defineProps<IconProps>()

defineOptions({
  name: 'MaterialIcon',
})

const defaultIconProps = shallowRef(DEFAULT_ICON)

const classes = computed(() => {
  switch (defaultIconProps.value.style) {
    case 'outlined':
      return 'material-symbols-outlined'

    case 'rounded':
      return 'material-symbols-rounded'

    case 'sharp':
      return 'material-symbols-sharp'

    default:
      return ''
  }
})

const styles = computed(() => {
  const fill = props.name.includes('-fill') ? '1' : '0'

  return [
    `font-variation-settings: 'FILL' ${fill}, 'wght' ${defaultIconProps.value.fontWeight}, 'GRAD' ${defaultIconProps.value.grade}, 'opsz' ${defaultIconProps.value.opticalSize};`,
  ]
})
</script>
