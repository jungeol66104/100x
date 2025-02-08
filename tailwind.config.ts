import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['Mont', 'sans-serif'],
        pretendard: ['Pretendard', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        },
        fontWeight: {
        light: '100',
        regular: '400',
        medium: '500',
        bold: '700',
        extraBold: '800',
        extraLight: '200',
        },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--color-primary)",
        accent: "var(--color-accent)",
        neutral: "var(--color-neutral)",
      },
    },
  },
  plugins: [],
} satisfies Config;
