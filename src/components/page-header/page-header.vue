<template>
  <h1>{{ header }}</h1>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    header: string
  }>(),
  {
    header: 'Page Header',
  },
)
</script>
