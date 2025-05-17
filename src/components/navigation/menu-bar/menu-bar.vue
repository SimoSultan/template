<template>
  <div class="flex">
    <div
      v-if="showMenuIcon"
      class="w-10 flex items-center justify-center cursor-pointer select-none"
      @click="toggleSideMenu"
    >
      <Icon :name="isSideMenuOpen ? 'menu_open' : 'menu'" class="text-black" />
    </div>
    <NavigationMenuRoot v-model="currentTrigger" class="relative z-10 w-full">
      <NavigationMenuList class="m-0 flex list-none p-1">
        <template v-for="item in routeItems" :key="item">
          <RouterLink :to="item.to">
            <NavigationMenuItem>
              <NavigationMenuTrigger
                class="text-green-700 hover:bg-green-300 focus:shadow-green-700 group flex select-none items-center justify-between gap-1 rounded-1 px-3 py-2 text-4 font-medium leading-none outline-none focus:shadow-[0_0_0_2px] cursor-pointer"
              >
                {{ item.label }}
                <Icon
                  v-if="item.dropdown"
                  name="arrow_drop_down"
                  class="text-green-700 relative top-0.5 transition-transform duration-[250ms] ease-in group-data-[state=open]:-rotate-180"
                />
              </NavigationMenuTrigger>
            </NavigationMenuItem>
          </RouterLink>
        </template>
      </NavigationMenuList>
    </NavigationMenuRoot>
  </div>
</template>

<script setup lang="ts">
import Icon from '@/components/icon/icon.vue'
import { useNavigation } from '@/hooks/useNavigation'
import {
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuRoot,
  NavigationMenuTrigger,
} from 'radix-vue'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const currentTrigger = ref('')

type RouteItem = {
  label: string
  to: string
  dropdown?: boolean
}
const { isSideMenuOpen, toggleSideMenu } = useNavigation()

withDefaults(defineProps<{ routeItems: RouteItem[]; showMenuIcon?: boolean }>(), {
  showMenuIcon: true,
})
</script>
