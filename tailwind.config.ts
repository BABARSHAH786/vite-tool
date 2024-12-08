import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens:{
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        // 'custom': '1400px',

      },
    
        backgroundImage:{
          bannerImg: "url('/Rectangle2.png') ",
          blackOverlay:"linear-gradient( to bottom, rgba(0,0,0,0) 0%,  rgba(0,0,0,0.1) 100%)",
          bannerImgTwo:"url('/image11.png') ",
        },
    
    },
  },
  plugins: [],
} satisfies Config;
