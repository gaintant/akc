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
      colors: { primary: "#E82C2A", lightFont: "#6B7280", boldFont: "#1F2937" },
    },
  },
  plugins: [],
} satisfies Config;
