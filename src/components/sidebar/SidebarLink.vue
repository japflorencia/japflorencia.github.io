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
    font-weight: 400;
    user-select: none;

    margin: 0.1em 0;
    padding: 0.4em;
    border-radius: 0.25em;
    height: 1.5em;

    color: var(--sidebar-text-color);
    text-decoration: none;
}

.link:hover {
    background-color: var(--sidebar-bg);
    color: var(--sidebar-text-color-hover);
}

.link.active {
    background-color: var(--sidebar-bg);
    color: var(--sidebar-text-color-hover);
}

.link .icon {
    flex-shrink: 0;
    width: 25px;
    margin-right: 10px;
}
</style>