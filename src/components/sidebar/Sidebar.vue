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
                <div>J</div>
            </span>
            <span v-else>Japflorencia</span>
        </h1>
        <img alt="Vue logo" class="logo" src="@/assets/robot.svg" width="125" height="125" />
        <SidebarLink to="/" icon="fa-solid fa-home">Home</SidebarLink>
        <SidebarLink to="http://japflorencia.github.io/storybook" icon="fa-solid fa-book">Storybook</SidebarLink>
        <SidebarLink to="http://tortilla.japflorencia.es" icon="fa-solid fa-utensils">Tortilla App</SidebarLink>
        <SidebarLink to="http://rpg.japflorencia.es" icon="fa-solid fa-dice-d20">RPG Toolkit</SidebarLink>
        <SidebarLink to="/about" icon="fa-solid fa-id-card">About Me</SidebarLink>
        <span class="collapse-icon" :class="{ 'rotate-180': collapsed }" @click="toggleSidebar">
            <font-awesome-icon icon="fa-solid fa-share-from-square" />
        </span>

    </div>
</template>

<style>
:root {
    --sidebar-width: 250px;
    --sidebar-bg: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --sidebar-text-color: #ffffff;
    --sidebar-text-color-hover: #ffffff;
    --sidebar-border-color: rgba(0, 0, 0, 0.1);
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
    background: var(--sidebar-bg);
    color: var(--sidebar-text-color);
    border-right: 1px solid var(--sidebar-border-color);
    box-shadow: 2px 0 20px rgba(0, 0, 0, 0.15);

    overflow-y: auto;
    transition: 0.3s ease;
    overflow: hidden;
}

.sidebar h1 {
    font-size: 1.5rem;
    font-weight: 800;
    padding: 1.5rem 1rem;
    text-align: center;
    letter-spacing: -0.02em;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
}

.sidebar img {
    display: none;
}

.collapse-icon {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.7rem;
    cursor: pointer;
    color: var(--sidebar-text-color);
    background: rgba(255, 255, 255, 0.15);
    border-radius: 0.5rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    transform: rotate(180deg);
    transition: all 0.3s ease;

    font-size: 1.1rem;
}

.collapse-icon:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: rotate(180deg) scale(1.1);
}

.rotate-180 {
    transform: rotate(0deg);
    transition: 0.2s linear;
}

.rotate-180:hover {
    transform: rotate(0deg) scale(1.1);
}
</style>