// tailwind.config.ts

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // This tells Tailwind to scan ALL your pages and components inside the src folder
    "./src/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
    extend: {
      // Define your BMC color variables here for use in custom CSS (globals.css)
      colors: {
        'deep-blue': '#191970',
        'hunter-green': '#008080',
        'accent-gold': '#FFD700',
      },
    },
  },
  plugins: [],
};
export default config;
