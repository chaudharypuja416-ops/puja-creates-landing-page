import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: "#18233A",
          primary: "#0F9F8E",
          secondary: "#246BFD",
          soft: "#E8F8F5",
          mist: "#F6FBFA"
        }
      },
      boxShadow: {
        soft: "0 24px 80px rgba(24, 35, 58, 0.10)",
        glow: "0 18px 60px rgba(15, 159, 142, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
