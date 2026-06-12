import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#f7fbff",
        moss: "#67e8f9",
        leaf: "#34d399",
        mist: "#141a17",
        wheat: "#f7c35f",
        skysoft: "#8b5cf6",
      },
      boxShadow: {
        soft: "0 24px 70px rgba(0, 0, 0, 0.34)",
      },
    },
  },
  plugins: [],
};

export default config;
