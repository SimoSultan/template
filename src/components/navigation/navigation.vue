<template>
  <nav>
    <MenuBar :route-items="routes" class="w-full bg-white" />
  </nav>
</template>
<script setup lang="ts">
import MenuBar from '@/components/navigation/menu-bar/menu-bar.vue'

defineOptions({
  name: 'NavigationContent',
})
const routes = [
  { label: 'Home', to: '/', dropdown: false },
  { label: 'About', to: '/about', dropdown: false },
]
</script>
