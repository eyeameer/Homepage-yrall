/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxSizing: ['border-box'],
      boxShadow: {
        'bottom': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        poppinsRegular:['poppinsRegular', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],  
        poppinsThin:['poppinsThin', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],  
        poppinsLight:['poppinsLight', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],  
        h2: "var(--h2-font-family)",
        "h2-description": "var(--h2-description-font-family)",
        "h2-tag-heading": "var(--h2-tag-heading-font-family)",
        h3: "var(--h3-font-family)",
        "h3-tag": "var(--h3-tag-font-family)",
        h4: "var(--h4-font-family)", 
    },
      colors: {
        primaryColor: "#03989E",
        logo: "var(--logo)",
        "primary-colour": "var(--primary-colour)",
        "primary-colour-1": "var(--primary-colour-1)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        slideDown: {
          '0%': { transform: 'translateY(-70%)' },
          '100%': { transform: 'translateY(0)' }
        }
      },
      animation: {
        'slide-down': 'slideDown 1s ease-in-out'
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}



// const { nextui } = require("@nextui-org/react");
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//     "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
//   ],
//   theme: {
//     extend: {
//       boxShadow: {
//         'bottom': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
//       },
//       colors: {
//         primary: "#03989E",
//         logo: "var(--logo)",
//         "primary-colour": "var(--primary-colour)",
//         "primary-colour-1": "var(--primary-colour-1)",
//    },
//       fontFamily: {
//         poppinsRegular:['poppinsRegular', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],  
//         h2: "var(--h2-font-family)",
//         "h2-description": "var(--h2-description-font-family)",
//         "h2-tag-heading": "var(--h2-tag-heading-font-family)",
//         h3: "var(--h3-font-family)",
//         "h3-tag": "var(--h3-tag-font-family)",
//         h4: "var(--h4-font-family)", 
//     },
//     },
//   },
//   darkMode: "class",
//   plugins: [],
// }