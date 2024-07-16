import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", ...fontFamily.sans],
        caveat: ['Caveat', 'cursive']
      },
      colors: { primary: "#E82C2A", cyanAKC: "#36BBFC", lightFont: "#6B7280", defaultFontColor: "#1F2937", altTextColor: '#374151', greyBg: '#E5E7EB' },
    },
  },
  plugins: [],
} satisfies Config;
