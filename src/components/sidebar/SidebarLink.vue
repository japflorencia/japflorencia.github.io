<script lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { collapsed } from './state';

export default {
    props: {
        to: {
            type: String,
            required: true,
        },
        icon: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        const route = useRoute();
        const isActive = computed(() => route.path === props.to);

        return { isActive, collapsed };
    },
};
</script>

<template>
    <component :is="to.startsWith('http') ? 'a' : 'router-link'" :key="to"
        v-bind="to.startsWith('http') ? { href: to } : { to }" class="link" :class="{ active: isActive }">
        <font-awesome-icon class="icon" :icon="icon" />
        <transition name="fade">
            <span v-if="!collapsed">
                <slot />
            </span>
        </transition>
    </component>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.link {
    display: flex;
    align-items: center;

    cursor: pointer;
    position: relative;
    font-weight: 500;
    user-select: none;

    margin: 0.5rem 0.75rem;
    padding: 0.6rem 0.75rem;
    border-radius: 0.5rem;
    height: 2rem;

    color: var(--sidebar-text-color);
    text-decoration: none;
    transition: all 0.25s ease;
}

.link:hover {
    background-color: rgba(255, 255, 255, 0.2);
    color: var(--sidebar-text-color-hover);
    transform: translateX(4px);
}

.link.active {
    background-color: rgba(255, 255, 255, 0.25);
    color: var(--sidebar-text-color-hover);
    border-left: 3px solid rgba(255, 255, 255, 0.8);
}

.link .icon {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    margin-right: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>