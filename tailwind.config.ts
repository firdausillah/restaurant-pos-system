import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'primary': '#17888E',
        'secondary-1': '#8B8B8C',
        'secondary-2': '#A1A1A1',
        'light': '#DEEBEC',
        'light-2': '#DCDDDD',
        'dark': '#474443'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
export default config;
