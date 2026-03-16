# Solvify

Solvify provides FinTech Engineering & Modernization Solutions. This project is a modern web application built with React, TypeScript, and Vite, designed to offer powerful and scalable solutions for modern businesses.

Live website:[https://solvifyuk.netlify.app](https://solvifyuk.netlify.app)
## 🚀 Features

- **FinTech Focus**: Solutions tailored for financial technology modernization.
- **Modern Tech Stack**: Built with React 18, TypeScript, and Vite 6.
- **Styling**: Utilizes Tailwind CSS v4 for utility-first styling.
- **UI Components**: Integrated with Radix UI and Material UI (MUI) for accessible and robust components.
- **Routing**: Client-side routing with React Router v7.
- **SEO**: Dynamic head management using `react-helmet-async`.
- **Animations**: Fluid transitions and animations powered by Framer Motion.

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Libraries**: [Radix UI](https://www.radix-ui.com/), [Material UI](https://mui.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📋 Requirements

- [Node.js](https://nodejs.org/) (Recommended version: Latest LTS)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

## ⚙️ Setup & Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/solvify/solvify.git
   cd solvify
   ```

2. **Install dependencies**:
   Using npm:
   ```bash
   npm install
   ```
   Or using pnpm:
   ```bash
   pnpm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

4. **Build for production**:
   ```bash
   npm run build
   ```
   The optimized production build will be generated in the `dist` folder.

## 📜 Scripts

| Script  | Description |
| :------ | :---------- |
| `dev`   | Starts the Vite development server. |
| `build` | Builds the application for production. |

## 📂 Project Structure

```text
Solvify/
├── public/          # Static assets
├── src/
│   ├── components/  # Reusable UI components
│   ├── constants/   # Site configuration and navigation links
│   ├── data/        # Data files (e.g., home content)
│   ├── pages/       # Page components (Home, Services, etc.)
│   ├── styles/      # CSS and styling files
│   ├── App.tsx      # Main App component and provider setup
│   ├── main.tsx     # Application entry point
│   └── routes.tsx   # Route definitions
├── index.html       # HTML template
├── package.json     # Project dependencies and scripts
├── tailwind.config.js # Tailwind CSS configuration
└── tsconfig.json    # TypeScript configuration
```

## 🧪 Tests

- TODO: Implement unit and integration tests (e.g., using [Vitest](https://vitest.dev/)).

## 🔐 Environment Variables

- TODO: Define any required environment variables in a `.env` file if necessary.

## 📄 License

- TODO: Add a license file (e.g., MIT).

---

Developed by [Pritanya Fritz](https://github.com/pritanyafritz).
