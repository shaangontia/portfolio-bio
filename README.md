# Personal Bio Website

A pixel-perfect, responsive personal portfolio website built with modern web technologies. This project is a custom implementation inspired by [Brittany Chiang's v4 design](https://brittanychiang.com/), featuring a sleek dark theme, smooth animations, and a focus on accessibility and user experience.

## ✨ Features

-   **Modern Tech Stack**: Built with React 18+, TypeScript, and Vite for lightning-fast performance.
-   **Responsive Design**: Mobile-first approach ensuring a great experience across all devices.
-   **State Management**: Utilizes Redux Toolkit for efficient global state management.
-   **UI/UX**:
    -   Material UI (MUI) components & icons.
    -   Smooth scrolling navigation.
    -   Interactive hover effects and micro-animations using Framer Motion.
    -   Customized typography (Inter/Calibre fonts).
-   **Clean Architecture**: Component-based structure with separate styling and logic.

## 🛠️ Technology Stack

-   **Core**: [React](https://reactjs.org/) (Hooks, Context), [TypeScript](https://www.typescriptlang.org/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: CSS Modules / Styled Components patterns, [Material UI (MUI)](https://mui.com/), [Framer Motion](https://www.framer.com/motion/)
-   **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
-   **Routing/Navigation**: [React Scroll](https://www.npmjs.com/package/react-scroll)

## 🚀 Getting Started

Follow these steps to get the project running locally on your machine.

### Prerequisites

-   Node.js (v18 or higher recommended)
-   npm (comes with Node.js)

### Installation

1.  **Clone the repository** (if applicable) or navigate to the project directory:
    ```bash
    cd /path/to/personal_bio
    ```

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
├── components/     # Reusable UI components
├── assets/         # Images, fonts, and static assets
├── styles/         # Global styles and theme configurations
├── utils/          # Helper functions and hooks
├── data.ts         # Centralized content data (Experience, Projects, etc.)
├── App.tsx         # Main application component
└── main.tsx        # Entry point
```

## 🎨 Customizing Content

You can easily update the portfolio content by modifying the `src/data.ts` file. This file contains structured data for:
-   About Me
-   Experience
-   Projects
-   Contact Information
-   Social Links

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
