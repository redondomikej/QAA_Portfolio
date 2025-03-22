# React + Vite + Tailwind CSS Portfolio with Vercel Deployment

This project is a modern portfolio website built using **React** with  **Vite** , styled with  **Tailwind CSS** , and enhanced with **Framer Motion** for animations. It also features client-side routing with **React Router** and uses **React Icons** for UI elements. Finally, the project is deployed seamlessly using  **Vercel** .

---

## Project Setup

### Step 1: Create Project Directory

```sh
mkdir my-portfolio
cd my-portfolio
```

### Step 2: Create Vite React App

```sh
npm create vite@latest . --template react
```

Alternatively, you can use:

```sh
npx create-vite . --template react
```

### Configuration Steps

* Select a framework: `React`
* Select a variant: `JavaScript`

Once scaffolding is complete, install dependencies:

```sh
npm install
npm run dev
```

---

## Install and Configure Tailwind CSS

### Step 3: Install Tailwind CSS

```sh
if this not work
npm install -D tailwindcss postcss autoprefixer 
try this
npm install -D tailwindcss@3 postcss autoprefixer
```

### Step 4: Initialize Tailwind CSS

```sh
npx tailwindcss init -p
```

This creates:

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

---

## Install Dependencies

### Step 7: Install Required Packages

For routing and animations, install the following:

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

## Deploying to Vercel

### Step 9: Install Vercel CLI (Optional)

To deploy from the command line, install the Vercel CLI:

```sh
npm install -g vercel
```

### Step 10: Initialize Vercel Deployment

Inside your project directory, run:

```sh
vercel
```

Follow the prompts to configure your deployment. The default settings should work fine for most cases.

### Step 11: Configure `vite.config.js`

Update `vite.config.js` to ensure proper routing:

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
});
```

### Step 12: Deploy

Run the following command to deploy your project:

```sh
vercel --prod
```

Once the deployment is complete, Vercel will provide a live URL where your portfolio is hosted.

---

## Conclusion

This guide walks you through setting up a **React + Vite + Tailwind CSS** portfolio and deploying it with  **Vercel** . Feel free to customize the project further to suit your needs. Happy coding! 🚀

---


## Author

**Mike EJ Redondo**

Software QA Engineer | Automation Tester | Web Developer

📧 Email: [[redondomikej@gmail.com]()]

📞 Contact: 09169045914

🔗 GitHub: [https://github.com/redondomikej](https://github.com/redondomikej)

🌐 Portfolio: [https://qaa-portfolio-m45b0wwtq-mike-ejs-projects.vercel.app](https://qaa-portfolio-m45b0wwtq-mike-ejs-projects.vercel.app/)
