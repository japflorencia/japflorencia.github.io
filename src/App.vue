<script lang="ts">
import Sidebar from '@/components/sidebar/Sidebar.vue'
import { sidebarWidth } from '@/components/sidebar/state'

export default {
  components: { Sidebar },
  setup() {
    return { sidebarWidth }
  },
}
</script>

<template>
  <Sidebar />
  <div :style="{ 'margin-left': sidebarWidth }">
    <router-view />
  </div>
</template>

<style scoped>
div {
  transition: margin-left 0.3s ease;
}
</style>
