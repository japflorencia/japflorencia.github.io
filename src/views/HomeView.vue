<script setup lang="ts">
import { ref } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import HeroSection from '../components/HeroSection.vue'

const projects = ref([
  {
    id: 1,
    title: 'Storybook',
    description: 'Interactive component library and design system documentation. Showcasing reusable components and design patterns.',
    tags: ['Vue', 'Components', 'Design System'],
    url: 'https://japflorencia.github.io/storybook',
    icon: 'fa-solid fa-object-group',
    color: 'from-blue-500 to-cyan-400'
  },
  {
    id: 2,
    title: 'Tortilla App',
    description: 'The perfect companion to choose who pays team\'s breakfast this time.',
    tags: ['Python', 'App'],
    url: 'https://tortilla.japflorencia.es',
    icon: 'fa-solid fa-utensils',
    color: 'from-orange-500 to-red-400'
  },
  {
    id: 3,
    title: 'RPG Toolkit',
    description: 'Comprehensive toolkit for RPG game masters. Tools for players and game masters.',
    tags: ['React', 'Games', 'Development'],
    url: 'https://rpg.japflorencia.es',
    icon: 'fa-solid fa-dice-d20',
    color: 'from-purple-500 to-pink-400'
  },
  {
    id: 4,
    title: 'Kanji Bot',
    description: 'Telegram bot for learning one kanji a day',
    tags: ['Node','Bot'],
    url: 'https://t.me/+U_lNZHUo75QxYmJk',
    icon: 'fa-solid fa-robot',
    color: 'from-yellow-500 to-yellow-200'
  }
])
</script>

<template>
  <main class="home">
    <HeroSection />
    
    <section class="projects-section">
      <div class="container">
        <div class="section-header">
          <h2>Featured Projects</h2>
          <p>A collection of my latest work and passion projects</p>
        </div>
        
        <div class="projects-grid">
          <ProjectCard 
            v-for="project in projects" 
            :key="project.id"
            :project="project"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.home {
  width: 100%;
}

.projects-section {
  padding: 4rem 0;
  background: linear-gradient(135deg, var(--bg-light) 0%, var(--bg-mute) 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-header p {
  font-size: 1.1rem;
  color: var(--text-secondary);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

@media (max-width: 768px) {
  .projects-section {
    padding: 2rem 0;
  }

  .section-header h2 {
    font-size: 1.8rem;
  }

  .container {
    padding: 0 1rem;
  }
}
</style>
