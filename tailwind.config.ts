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
        ink: "#16201a",
        moss: "#25513f",
        leaf: "#2f7a52",
        mist: "#eef5f1",
        wheat: "#f4c765",
        skysoft: "#cbe5ee",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(21, 40, 30, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
