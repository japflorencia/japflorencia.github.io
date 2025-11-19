<script setup lang="ts">
import { ref } from 'vue'

const skills = ref([
  { category: 'Frontend', items: ['Vue.js', 'TypeScript', 'React', 'Tailwind CSS', 'Vite'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'Express', 'REST APIs'] },
  { category: 'Tools', items: ['Git', 'Docker', 'GitHub', 'VS Code'] },
  { category: 'Design', items: ['Figma', 'UI/UX', 'Storybook', 'Component Libraries'] }
])

const experiences = ref([
  {
    year: '2023 - Present',
    title: 'Full Stack Developer',
    description: 'Building modern web applications with Vue.js and TypeScript'
  },
  {
    year: '2022 - 2023',
    title: 'Frontend Developer',
    description: 'Developing responsive user interfaces and component libraries'
  },
  {
    year: '2021 - 2022',
    title: 'Junior Developer',
    description: 'Learning and contributing to various web projects'
  }
])
</script>

<template>
  <main class="about">
    <div class="container">
      <!-- Header -->
      <section class="header-section">
        <div class="header-content">
          <h1>About Me</h1>
          <p class="subtitle">A passionate developer dedicated to creating beautiful and functional digital experiences</p>
        </div>
      </section>

      <!-- Bio Section -->
      <section class="bio-section">
        <div class="bio-content">
          <div class="bio-text">
            <h2>Who Am I?</h2>
            <p>
              I'm a full-stack developer with a passion for creating elegant solutions to complex problems. 
              With expertise in modern web technologies, I specialize in building scalable applications using Vue.js, 
              TypeScript, and other cutting-edge tools.
            </p>
            <p>
              My journey in web development started with a curiosity about how things work on the internet. 
              Since then, I've grown to love the craft of building user interfaces and exploring the latest technologies 
              that make the web more interactive and engaging.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with the community.
            </p>
          </div>
          <div class="bio-stats">
            <div class="stat">
              <div class="stat-number">50+</div>
              <div class="stat-label">Projects</div>
            </div>
            <div class="stat">
              <div class="stat-number">5+</div>
              <div class="stat-label">Years</div>
            </div>
            <div class="stat">
              <div class="stat-number">100%</div>
              <div class="stat-label">Dedicated</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Skills Section -->
      <section class="skills-section">
        <h2>Skills & Technologies</h2>
        <div class="skills-grid">
          <div v-for="skillGroup in skills" :key="skillGroup.category" class="skill-group">
            <h3>{{ skillGroup.category }}</h3>
            <div class="skill-items">
              <span v-for="skill in skillGroup.items" :key="skill" class="skill-badge">
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Experience Section -->
      <section class="experience-section">
        <h2>Experience</h2>
        <div class="timeline">
          <div v-for="(exp, index) in experiences" :key="index" class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-year">{{ exp.year }}</div>
              <h3>{{ exp.title }}</h3>
              <p>{{ exp.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta-section">
        <h2>Let's Connect</h2>
        <p>I'm always interested in hearing about new projects and opportunities.</p>
        <div class="social-buttons">
          <a href="https://github.com/japflorencia" target="_blank" rel="noopener" class="cta-button">
            <font-awesome-icon icon="fa-brands fa-github" />
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener" class="cta-button">
            <font-awesome-icon icon="fa-brands fa-linkedin" />
            LinkedIn
          </a>
          <a href="mailto:contact@japflorencia.es" class="cta-button">
            <font-awesome-icon icon="fa-solid fa-envelope" />
            Email
          </a>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
.about {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 3rem 0;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
}

.header-section {
  text-align: center;
  margin-bottom: 4rem;
  padding: 2rem 0;
}

.header-section h1 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  font-size: 1.2rem;
  color: #4a5568;
  max-width: 600px;
  margin: 0 auto;
}

.bio-section {
  background: white;
  border-radius: 1rem;
  padding: 3rem;
  margin-bottom: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.bio-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  align-items: center;
}

.bio-text h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #2d3748;
}

.bio-text p {
  font-size: 1rem;
  line-height: 1.8;
  color: #4a5568;
  margin-bottom: 1.5rem;
}

.bio-stats {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.stat {
  text-align: center;
  padding: 1.5rem;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border-radius: 0.75rem;
  border: 1px solid rgba(102, 126, 234, 0.2);
}

.stat-number {
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  color: #718096;
  font-weight: 600;
  margin-top: 0.5rem;
}

.skills-section {
  margin-bottom: 3rem;
}

.skills-section h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: white;
  text-align: center;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.skill-group {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.skill-group:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.skill-group h3 {
  font-size: 1.2rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 1rem;
}

.skill-items {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.skill-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  color: #667eea;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  border: 1px solid rgba(102, 126, 234, 0.2);
}

.experience-section {
  margin-bottom: 3rem;
}

.experience-section h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: white;
  text-align: center;
}

.timeline {
  position: relative;
  padding: 2rem 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
}

.timeline-item {
  margin-bottom: 2rem;
  position: relative;
}

.timeline-item:nth-child(odd) .timeline-content {
  margin-left: 0;
  margin-right: auto;
  width: 45%;
  text-align: right;
}

.timeline-item:nth-child(even) .timeline-content {
  margin-left: auto;
  margin-right: 0;
  width: 45%;
  text-align: left;
}

.timeline-marker {
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: 12px;
  height: 12px;
  background: white;
  border: 3px solid #667eea;
  border-radius: 50%;
  z-index: 2;
}

.timeline-content {
  background: white;
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.timeline-year {
  color: #667eea;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.timeline-content h3 {
  font-size: 1.2rem;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.timeline-content p {
  color: #718096;
}

.cta-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 3rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  color: white;
}

.cta-section h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.cta-section p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.social-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  background: white;
  color: #667eea;
  border-radius: 0.5rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

@media (max-width: 1024px) {
  .timeline::before {
    display: none;
  }

  .timeline-item:nth-child(odd) .timeline-content,
  .timeline-item:nth-child(even) .timeline-content {
    width: 100%;
    text-align: left;
    margin: 0;
  }

  .timeline-marker {
    left: 0;
  }

  .bio-content {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .header-section h1 {
    font-size: 2rem;
  }

  .bio-section {
    padding: 2rem 1.5rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .social-buttons {
    flex-direction: column;
  }

  .cta-button {
    width: 100%;
    justify-content: center;
  }
}
</style>
