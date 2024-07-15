import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        caveat: ['Caveat', 'cursive']
      },
      colors: { primary: "#E82C2A", lightFont: "#6B7280", defaultFontColor: "#1F2937", greyBg: '#E5E7EB' },
    },
  },
  plugins: [],
} satisfies Config;
