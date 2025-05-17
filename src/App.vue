<template>
  <header>
    <NavigationContent />
  </header>

  <main class="flex">
    <aside>
      <nav class="flex grow h-screen" v-if="isSideMenuOpen">
        <SideMenu />
      </nav>
    </aside>
    <RouterView />
  </main>

  <footer class="fixed bottom-0 w-full">
    <Footer />
  </footer>
</template>

<script setup lang="ts">
import { useNavigation } from './hooks/useNavigation'
import Footer from '@/components/navigation/footer/footer.vue'
import NavigationContent from '@/components/navigation/navigation.vue'
import SideMenu from '@/components/navigation/side-menu/side-menu.vue'
import { RouterView } from 'vue-router'

const { isSideMenuOpen } = useNavigation()
</script>
