import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			mont: [
  				'Mont',
  				'sans-serif'
  			],
  			pretendard: [
  				'Pretendard',
  				'sans-serif'
  			],
  			outfit: [
  				'Outfit',
  				'sans-serif'
  			]
  		},
  		fontWeight: {
  			light: '100',
  			regular: '400',
  			medium: '500',
  			bold: '700',
  			extraBold: '800',
  			extraLight: '200'
  		},
  		colors: {
        // Custom color palette
        primary: {
          DEFAULT: 'var(--color-primary)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
        },
        sub: {
          1: 'var(--color-sub-1)',
          2: 'var(--color-sub-2)',
          3: 'var(--color-sub-3)',
          4: 'var(--color-sub-4)',
          5: 'var(--color-sub-5)',
        },
        // Shadcn UI colors
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
        ui: {
          primary: {
            DEFAULT: 'hsl(var(--primary))',
            foreground: 'hsl(var(--primary-foreground))'
          },
          accent: {
            DEFAULT: 'hsl(var(--accent))',
            foreground: 'hsl(var(--accent-foreground))'
          },
          card: {
            DEFAULT: 'hsl(var(--card))',
            foreground: 'hsl(var(--card-foreground))'
          },
          popover: {
            DEFAULT: 'hsl(var(--popover))',
            foreground: 'hsl(var(--popover-foreground))'
          },
          secondary: {
            DEFAULT: 'hsl(var(--secondary))',
            foreground: 'hsl(var(--secondary-foreground))'
          },
          muted: {
            DEFAULT: 'hsl(var(--muted))',
            foreground: 'hsl(var(--muted-foreground))'
          },
          destructive: {
            DEFAULT: 'hsl(var(--destructive))',
            foreground: 'hsl(var(--destructive-foreground))'
          },
        },
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
