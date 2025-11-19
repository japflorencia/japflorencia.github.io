<script setup lang="ts">

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  url: string
  icon: string
  color: string
}

defineProps<{
  project: Project
}>()

const handleClick = (url: string) => {
  window.open(url, '_blank')
}
</script>

<template>
  <div class="project-card" :class="`bg-gradient-${project.color}`" @click="handleClick(project.url)">
    <div class="card-background"></div>
    
    <div class="card-content">
      <div class="card-icon">
        <font-awesome-icon :icon="project.icon" />
      </div>
      
      <h3 class="card-title">{{ project.title }}</h3>
      
      <p class="card-description">{{ project.description }}</p>
      
      <div class="card-tags">
        <span v-for="tag in project.tags" :key="tag" class="tag">
          {{ tag }}
        </span>
      </div>
      
      <div class="card-footer">
        <span class="visit-text">Visit Project</span>
        <font-awesome-icon icon="fa-solid fa-arrow-up" class="arrow-icon" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  background: white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 400px;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
}

.card-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 150px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  z-index: 0;
}

.project-card.bg-gradient-from-blue-500:has(> .card-background) .card-background {
  background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%);
}

.project-card.bg-gradient-from-orange-500:has(> .card-background) .card-background {
  background: linear-gradient(135deg, #f97316 0%, #ef4444 100%);
}

.project-card.bg-gradient-from-purple-500:has(> .card-background) .card-background {
  background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
}

.card-content {
  position: relative;
  z-index: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.card-icon {
  font-size: 2.5rem;
  color: white;
  margin-bottom: 1rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.card-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 1rem;
}

.card-description {
  font-size: 0.95rem;
  color: #4a5568;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  flex: 1;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tag {
  display: inline-block;
  padding: 0.35rem 0.75rem;
  background: #f0f0f0;
  color: #667eea;
  border-radius: 0.25rem;
  font-size: 0.8rem;
  font-weight: 600;
  border: 1px solid #e0e0e0;
}

.card-footer {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #667eea;
  font-weight: 600;
  transition: all 0.3s ease;
}

.project-card:hover .card-footer {
  gap: 1rem;
}

.arrow-icon {
  transition: transform 0.3s ease;
}

.project-card:hover .arrow-icon {
  transform: translate(2px, -2px);
}

@media (max-width: 768px) {
  .project-card {
    min-height: 350px;
  }

  .card-content {
    padding: 1.5rem;
  }

  .card-icon {
    font-size: 2rem;
  }

  .card-title {
    font-size: 1.3rem;
  }

  .card-description {
    font-size: 0.9rem;
  }
}
</style>
