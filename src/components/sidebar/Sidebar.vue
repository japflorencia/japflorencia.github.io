<script lang="ts">
import SidebarLink from './SidebarLink.vue';
import { collapsed, toggleSidebar, sidebarWidth } from './state';

export default {
    components: { SidebarLink },
    setup() {
        return { collapsed, toggleSidebar, sidebarWidth };
    },
}
</script>

<template>
    <div class="sidebar" :style="{ width: sidebarWidth }">
        <h1>
            <span v-if="collapsed">
                <div>S</div>
            </span>
            <span v-else>Sidebar</span>
        </h1>
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
        <SidebarLink to="/storybook" icon="fa-regular fa-object-group">Storybook</SidebarLink>
        <span class="collapse-icon" :class="{ 'rotate-180': collapsed }" @click="toggleSidebar">
            <font-awesome-icon icon="fa-regular fa-share-from-square" />
        </span>

    </div>
</template>

<style>
:root {
    --sidebar-width: 250px;
    --sidebar-bg: #ecbb82;
    --sidebar-text-color: #333;
    --sidebar-text-color-hover: #000;
    --sidebar-border-color: #662761;
}
</style>

<style scoped>
.sidebar {
    position: fixed;
    z-index: 1;
    float: left;
    top: 0;
    left: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    
    width: var(--sidebar-width);
    background-color: var(--sidebar-bg);
    color: var(--sidebar-text-color);
    border-right: 1px solid var(--sidebar-border-color);

    overflow-y: auto;
    transition: 0.3s ease;
    overflow: hidden;
}

.collapse-icon {
    position: absolute;
    bottom: 0;
    padding: 0.7rem;
    cursor: pointer;

    color: var(--sidebar-text-color);
    transform: rotate(180deg);
    transition: 0.2s linear;
}

.rotate-180 {
    transform: rotate(0deg);
    transition: 0.2s linear;
}
</style>