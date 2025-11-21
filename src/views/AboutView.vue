<script setup lang="ts">
import { ref } from 'vue'

const skills = ref([
  { 
    category: 'Frontend', 
    items: ['React', 'Vue.js', 'TypeScript', 'Sass', 'Storybook', 'Cypress', 'Jest'] 
  },
  { 
    category: 'Backend & DevOps', 
    items: ['Node.js', 'Express', 'Docker', 'Heroku', 'Redis', 'PHP'] 
  },
  { 
    category: 'Testing & QA', 
    items: ['Cypress', 'Jest', 'Enzyme', 'Cucumber', 'e2e Testing', 'Unit Testing'] 
  },
  { 
    category: 'Tools & Methodologies', 
    items: ['Git', 'Scrum', 'Kanban', 'CircleCI', 'Splunk', 'Grafana', 'Slack'] 
  }
])

const experiences = ref([
  {
    year: 'Sep 2023 - Present',
    title: 'Senior Frontend Developer',
    company: 'Jungheinrich Digital Solutions',
    description: 'Frontend development for e-commerce platforms with implementation of comprehensive testing strategies using React.js and Cypress.'
  },
  {
    year: 'Apr 2022 - Aug 2023',
    title: 'Senior Full Stack Engineer',
    company: 'Parser',
    description: 'Full stack development for major British economic newspaper. Managed subscriber flows, implemented SSO technologies, and handled security monitoring. Tech stack: React, TypeScript, Node.js, Redis, Grafana.'
  },
  {
    year: 'Sep 2021 - Apr 2022',
    title: 'Senior Frontend Developer',
    company: 'Stack & Vault',
    description: 'React development for Scout24, a leading real estate platform. Built scalable applications with TypeScript, Sass, and comprehensive testing.'
  },
  {
    year: 'Feb 2019 - Sep 2021',
    title: 'Senior Frontend Developer',
    company: 'Sweepr Technologies',
    description: 'React applications for smart home automation system supporting mobile and voice-activated devices (Alexa, Google). Tech stack: React, Redux, Jest, Cypress.'
  },
  {
    year: 'Mar 2018 - Feb 2019',
    title: 'Mobile Developer',
    company: 'Telefónica Educación Digital',
    description: 'Mobile development for ProFuturo educational initiative. Built apps using Ionic 3, Angular 4, and TypeScript.'
  },
  {
    year: 'Jul 2015 - Mar 2018',
    title: 'Frontend Developer',
    company: 'Mitula Group',
    description: 'Frontend web development for classified ads marketplace. Specialized in responsive design, SEO optimization, and e2e testing with InternJS.'
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
              I'm a Senior Frontend Developer with over 10 years of experience building scalable web applications and digital solutions. 
              Specialized in React.js and TypeScript, I've led development efforts at cutting-edge companies including Jungheinrich Digital Solutions, Parser, and Sweepr Technologies.
            </p>
            <p>
              My expertise spans full-stack development with a strong focus on frontend architecture, testing automation (Cypress, Jest), and agile methodologies. 
              I'm passionate about writing clean, maintainable code and building high-performance applications that deliver exceptional user experiences.
            </p>
            <p>
              Currently working at Jungheinrich Digital Solutions as a Senior Frontend Developer, where I develop e-commerce solutions and implement comprehensive testing strategies. 
              I'm committed to continuous learning and sharing knowledge with the development community.
            </p>
          </div>
          <div class="bio-stats">
            <div class="stat">
              <div class="stat-number">10+</div>
              <div class="stat-label">Years Experience</div>
            </div>
            <div class="stat">
              <div class="stat-number">10+</div>
              <div class="stat-label">Projects</div>
            </div>
            <div class="stat">
              <div class="stat-number">5+</div>
              <div class="stat-label">Companies</div>
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
              <div class="timeline-company">{{ exp.company }}</div>
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
          <a href="https://www.linkedin.com/in/japflorencia/" target="_blank" rel="noopener" class="cta-button">
            <font-awesome-icon icon="fa-brands fa-linkedin" />
            LinkedIn
          </a>
          <a href="mailto:japflorencia@gmail.com" class="cta-button">
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
