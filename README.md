# Personal Bio Website

A pixel-perfect, responsive personal portfolio website built with modern web technologies. This project is a custom implementation inspired by [Brittany Chiang's v4 design](https://brittanychiang.com/), featuring a sleek dark theme, smooth animations, and a focus on accessibility and user experience.

## ✨ Features

-   **Modern Tech Stack**: Built with React 19, TypeScript, and Vite for lightning-fast performance.
-   **Responsive Design**: Mobile-first approach ensuring a great experience across all devices.
-   **State Management**: Utilizes Redux Toolkit for efficient global state management.
-   **Portfolio Sections**:
    -   About Me with skills showcase
    -   Professional Experience timeline
    -   Education background
    -   Featured Projects
    -   Publications & Articles
-   **UI/UX**:
    -   Material UI (MUI) v7 components & icons.
    -   Smooth scrolling navigation with React Scroll.
    -   Interactive hover effects and micro-animations using Framer Motion.
    -   Custom theme with Emotion styling.
    -   Fixed sidebar with social links.
-   **Clean Architecture**: Component-based structure with separate styling files using TypeScript.

## 🛠️ Technology Stack

-   **Core**: [React](https://reactjs.org/) 19.2.0, [TypeScript](https://www.typescriptlang.org/) 5.9.3
-   **Build Tool**: [Vite](https://vitejs.dev/) 7.2.4
-   **Styling**: [Emotion](https://emotion.sh/) (styled components), [Material UI (MUI)](https://mui.com/) 7.3.6, [Framer Motion](https://www.framer.com/motion/) 12.23.26
-   **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) 2.11.2
-   **Navigation**: [React Scroll](https://www.npmjs.com/package/react-scroll) 1.9.3

## 🚀 Getting Started

Follow these steps to get the project running locally on your machine.

### Prerequisites

-   Node.js (v18 or higher recommended)
-   npm (comes with Node.js)

### Installation

1.  **Clone the repository** (if applicable) or navigate to the project directory:

2.  **Install dependencies**:
    ```bash
    npm install
    ```

### Running Locally

Start the development server with hot-reload:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port specified in your terminal).

### Building for Production

To create a production-ready build:

```bash
npm run build
```

This will generate the optimized files in the `dist` folder.

You can preview the production build locally using:

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── sections/
│   │   ├── About.tsx & AboutStyles.ts
│   │   ├── Experience.tsx & ExperienceStyles.ts
│   │   ├── Education.tsx & EducationStyles.ts
│   │   ├── Projects.tsx & ProjectsStyles.ts
│   │   └── Publications.tsx & PublicationsStyles.ts
│   ├── Sidebar.tsx & SidebarStyles.ts
│   └── Footer.tsx & FooterStyles.ts
├── store/
│   ├── index.ts           # Redux store configuration
│   └── navSlice.ts        # Navigation state management
├── assets/                # Static assets (images, icons)
├── data.ts                # Centralized content data (Bio, Experience, Projects, Publications, etc.)
├── theme.ts               # MUI theme configuration
├── App.tsx & AppStyles.ts # Main application component
├── index.css              # Global styles
└── main.tsx               # Entry point
```

## 🎨 Customizing Content

You can easily update the portfolio content by modifying the `src/data.ts` file. This file contains structured data for:
-   **Bio**: Name, tagline, hero text, about section, and skills
-   **Experience**: Professional work history with company, role, dates, and descriptions
-   **Education**: Academic background with degrees, dates, and achievements
-   **Projects**: Featured projects with descriptions, tech stack, and links
-   **Publications**: Articles and publications with titles, publishers, dates, and URLs
-   **Social Links**: GitHub, LinkedIn, and email contact information

Each section is fully typed with TypeScript interfaces for type safety and better developer experience.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
