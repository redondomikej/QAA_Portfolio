# React + Vite + Tailwind CSS Portfolio

This project is a portfolio website built using React with Vite, styled with Tailwind CSS, and featuring animations using Framer Motion. It also includes React Router for navigation and React Icons for icons.

## Project Setup

### Step 1: Create Project Directory

```sh
mkdir file
cd file
```

### Step 2: Create Vite React App

```sh
npm create vite@latest my-portfolio --template react
```

Alternatively, you can use:

```sh
npx create-vite my-portfolio --template react
```

### Configuration Steps

* Select a framework: `React`
* Select a variant: `JavaScript`

Once scaffolding is complete, navigate to the project directory and install dependencies:

```sh
cd my-portfolio
npm install
npm run dev
```

### Step 3: Install Tailwind CSS

```sh
npm install -D tailwindcss@3 postcss autoprefixer
```

### Step 4: Initialize Tailwind CSS

```sh
npx tailwindcss init -p
```

This will create:

* `tailwind.config.js`
* `postcss.config.js`

### Step 5: Configure Tailwind CSS

Edit `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#facc15", // Custom yellow
        dark: "#1a1a2e",
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
```

### Step 6: Add Tailwind to CSS

In `index.css`, include:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Step 7: Install Dependencies

For routing and animations, install the following packages:

```sh
npm install react-router-dom react-icons framer-motion
```

### Step 8: Run the Project

Start the development server:

```sh
npm run dev
```

The project will be available at `http://localhost:5173/` by default.

---

## Additional Notes

This project follows best practices for a modern React application using Vite and Tailwind CSS. Customize it further by adding pages and components using React Router.

Happy coding! 🚀
