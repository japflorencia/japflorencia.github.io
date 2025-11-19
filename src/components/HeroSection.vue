<script setup lang="ts">
const scrollToProjects = () => {
  const element = document.querySelector('.projects-section')
  element?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section class="hero">
    <div class="hero-background">
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
      <div class="gradient-orb orb-3"></div>
    </div>
    
    <div class="hero-content">
      <div class="hero-text">
        <div class="greeting">
          <span class="wave">👋</span>
          <span>Hey, I'm</span>
        </div>
        
        <h1 class="name">Japflorencia</h1>
        
        <p class="tagline">
          A passionate developer crafting beautiful, functional digital experiences
        </p>
        
        <p class="description">
          Full-stack developer with expertise in Vue.js, TypeScript, and modern web technologies. 
          I build elegant solutions to complex problems.
        </p>
        
        <div class="cta-buttons">
          <button class="btn btn-primary" @click="scrollToProjects">
            <span>Explore My Work</span>
            <font-awesome-icon icon="fa-solid fa-arrow-right" />
          </button>
          <router-link to="/about" class="btn btn-secondary">
            <span>About Me</span>
            <font-awesome-icon icon="fa-solid fa-user" />
          </router-link>
        </div>
        
        <div class="social-links">
          <a href="https://github.com/japflorencia" target="_blank" rel="noopener" class="social-link" title="GitHub">
            <font-awesome-icon icon="fa-brands fa-github" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener" class="social-link" title="LinkedIn">
            <font-awesome-icon icon="fa-brands fa-linkedin" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener" class="social-link" title="Twitter">
            <font-awesome-icon icon="fa-brands fa-x-twitter" />
          </a>
        </div>
      </div>
      
      <div class="hero-visual">
        <div class="avatar-container">
          <div class="avatar-glow"></div>
          <div class="avatar">
            <font-awesome-icon icon="fa-solid fa-code" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
}

.hero-background {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;
  overflow: hidden;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.5;
  animation: float 20s ease-in-out infinite;
}

.orb-1 {
  width: 400px;
  height: 400px;
  background: rgba(255, 255, 255, 0.1);
  top: -100px;
  right: -100px;
  animation-delay: 0s;
}

.orb-2 {
  width: 300px;
  height: 300px;
  background: rgba(255, 255, 255, 0.05);
  bottom: -50px;
  left: -50px;
  animation-delay: 5s;
}

.orb-3 {
  width: 350px;
  height: 350px;
  background: rgba(255, 255, 255, 0.08);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: 10s;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0);
  }
  33% {
    transform: translate(30px, -30px);
  }
  66% {
    transform: translate(-20px, 20px);
  }
}

.hero-content {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  max-width: 1200px;
  width: 100%;
}

.hero-text {
  color: white;
}

.greeting {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  opacity: 0.9;
}

.wave {
  display: inline-block;
  animation: wave 2s ease-in-out infinite;
  transform-origin: 70% 70%;
}

@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  }
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.name {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  line-height: 1.1;
}

.tagline {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  opacity: 0.95;
}

.description {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.85;
  line-height: 1.6;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.btn-primary {
  background: white;
  color: #667eea;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.15);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
}

.social-links {
  display: flex;
  gap: 1.5rem;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1.3rem;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-3px) rotate(5deg);
  border-color: rgba(255, 255, 255, 0.4);
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.avatar-container {
  position: relative;
  width: 300px;
  height: 300px;
}

.avatar-glow {
  position: absolute;
  inset: -20px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%);
  animation: pulse 3s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
}

.avatar {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%);
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.3);
  font-size: 5rem;
  color: white;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3);
  animation: rotate 20s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .name {
    font-size: 3rem;
  }

  .tagline {
    font-size: 1.3rem;
  }

  .avatar-container {
    width: 250px;
    height: 250px;
  }
}

@media (max-width: 768px) {
  .hero {
    min-height: auto;
    padding: 2rem 1rem;
  }

  .name {
    font-size: 2.2rem;
  }

  .tagline {
    font-size: 1.1rem;
  }

  .description {
    font-size: 1rem;
  }

  .cta-buttons {
    flex-direction: column;
  }

  .btn {
    justify-content: center;
    width: 100%;
  }

  .avatar-container {
    width: 200px;
    height: 200px;
  }

  .avatar {
    font-size: 3rem;
  }

  .social-links {
    gap: 1rem;
  }

  .social-link {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1rem;
  }
}
</style>
