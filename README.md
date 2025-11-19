# 👨‍💻 Japflorencia Portfolio

A modern, responsive portfolio website built with **Vue 3**, **TypeScript**, and **Vite**. Showcasing projects, skills, and professional experience with a sleek, animated design.

## ✨ Features

- **Modern Design System** - Purple gradient theme with smooth animations
- **Fully Responsive** - Mobile-first approach with optimized layouts for all devices
- **Hero Section** - Eye-catching landing page with animated background and call-to-action
- **Project Showcase** - Interactive project cards with descriptions and links
- **About Page** - Professional bio, skills grid, timeline of experiences
- **Navigation Sidebar** - Collapsible navigation with smooth transitions
- **Social Links** - GitHub, LinkedIn, Twitter integration
- **Fast Performance** - Built with Vite for lightning-fast builds and dev server

## 🚀 Live Demo

Visit the portfolio: [japflorencia.github.io](https://japflorencia.github.io)

## 📋 Projects Featured

1. **Storybook** - Interactive component library and design system
2. **Tortilla App** - Choose who pay tortilla application
3. **RPG Toolkit** - RPG game development toolkit

## 🛠️ Tech Stack

- **Framework**: Vue 3 with `<script setup>` composition API
- **Language**: TypeScript
- **Build Tool**: Vite 5
- **Styling**: Scoped CSS with gradients and animations
- **Icons**: FontAwesome 7 (Solid, Regular, Brands)
- **Routing**: Vue Router 4
- **State Management**: Pinia
- **Testing**: Vitest & Cypress

## 📦 Installation

```sh
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Scripts

| Command                | Description                                |
| ---------------------- | ------------------------------------------ |
| `npm run dev`          | Start dev server at http://localhost:5173  |
| `npm run build`        | Build for production (type-check + minify) |
| `npm run preview`      | Preview production build locally           |
| `npm run type-check`   | Run TypeScript type checking               |
| `npm run lint`         | Lint and fix code with ESLint              |
| `npm run format`       | Format code with Prettier                  |
| `npm run test:unit`    | Run unit tests with Vitest                 |
| `npm run test:e2e:dev` | Run e2e tests with Cypress (dev mode)      |
| `npm run test:e2e`     | Run e2e tests with Cypress (production)    |

## 📂 Project Structure

```
src/
├── components/
│   ├── HeroSection.vue          # Landing hero with animations
│   ├── ProjectCard.vue           # Interactive project cards
│   └── sidebar/
│       ├── Sidebar.vue           # Main navigation sidebar
│       ├── SidebarLink.vue       # Navigation link component
│       └── state.js              # Sidebar state management
├── views/
│   ├── HomeView.vue              # Home page with projects
│   └── AboutView.vue             # About page with bio & skills
├── router/
│   └── index.ts                  # Vue Router configuration
├── stores/
│   └── counter.ts                # Pinia store example
├── assets/
│   ├── main.css                  # Global styles
│   ├── base.css                  # Base styles & variables
│   ├── robot.svg                 # Avatar graphic
│   └── logo.svg                  # Logo
├── App.vue                        # Root component
└── main.ts                        # Application entry point
```

## 🎨 Color Scheme

- **Primary Gradient**: #667eea → #764ba2 (Purple to Pink)
- **Accent Colors**: Various gradient combinations for projects
- **Text**: Adaptive colors for light/dark modes
- **Backgrounds**: Subtle gradients for visual depth

## 🔧 Development

### Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- Disable Vetur if installed
- Install [TypeScript Vue Plugin](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)

### TypeScript Support

This project uses `vue-tsc` for type checking. Volar provides full TypeScript support for `.vue` files in VSCode.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

The site is automatically deployed to GitHub Pages via CI/CD. Simply push to the `main` branch to deploy.

```sh
npm run build  # Creates dist/ folder
# Push to GitHub - deployment happens automatically
```

## 📄 License

This project is open source and available under the MIT License.

## 👨‍🔧 Author

**Japflorencia** - Full Stack Developer

- 🔗 [GitHub](https://github.com/japflorencia)
- 💼 [LinkedIn](https://linkedin.com/japflorencia)

---

Built with ❤️ using Vue 3 & Vite
