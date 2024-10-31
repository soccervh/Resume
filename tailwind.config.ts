import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-light": "var(--primary-light)",
        primary: "var(--primary)",
        "primary-dark": "var(--primary-dark)",
        "background-dark": "var(--background-dark)",
      },
    },
  },
  plugins: [],
} satisfies Config;
